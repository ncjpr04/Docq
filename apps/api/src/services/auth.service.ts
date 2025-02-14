import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "@workspace/Database/src/mongodb";
import { RegisterSchema, LoginSchema } from "../types/auth";
import { ZodError } from "zod";
import { formatValidationErrors } from "../types/auth";

const register = async (input: unknown) => {
    try {
        console.log("[AuthService] Parsing registration input...", input);
        try {
            // Remove confirmPassword from input before validation
            const { confirmPassword, ...registerInput } = input as any;
            
            const parsedInput = RegisterSchema.parse(registerInput);
            const { name, email, password } = parsedInput;

            console.log("[AuthService] Checking for existing user...");
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                console.log("[AuthService] User already exists");
                throw new Error("An account with this email already exists");
            }

            // Password validation
            if (!password.match(/[A-Z]/)) {
                throw new Error("Password must contain at least one uppercase letter");
            }
            if (!password.match(/[a-z]/)) {
                throw new Error("Password must contain at least one lowercase letter");
            }
            if (!password.match(/[0-9]/)) {
                throw new Error("Password must contain at least one number");
            }
            if (!password.match(/[\W_]/)) {
                throw new Error("Password must contain at least one special character");
            }
            if (password.length < 8) {
                throw new Error("Password must be at least 8 characters long");
            }

            console.log("[AuthService] Creating new user...");
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashedPassword });

            console.log("[AuthService] Generating token...");
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

            return { token, user: { id: user._id, name: user.name, email: user.email } };
        } catch (validationError) {
            console.error("[AuthService] Validation error:", validationError);
            if (validationError instanceof ZodError) {
                const errorMessage = formatValidationErrors(validationError);
                throw new Error(errorMessage);
            }
            throw validationError;
        }
    } catch (error) {
        console.error("[AuthService] Registration error:", error);
        throw error;
    }
};

const login = async (input: unknown) => {
    try {
        console.log("[AuthService] Parsing login input...");
        const parsedInput = LoginSchema.parse(input);
        const { email, password } = parsedInput;

        console.log("[AuthService] Finding user by email...");
        const user = await User.findOne({ email }).select('+password');
        if (!user || !user.password) {
            console.error("[AuthService] Authentication failed");
            throw new Error("Invalid email or password");
        }

        console.log("[AuthService] Validating credentials...");
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            console.error("[AuthService] Authentication failed");
            throw new Error("Invalid email or password");
        }

        console.log("[AuthService] Generating token...");
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

        console.log("[AuthService] Login successful");
        return { 
            token, 
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email 
            } 
        };
    } catch (error) {
        console.error("[AuthService] Login error:", error);
        if (error instanceof ZodError) {
            throw new Error("Invalid email or password");
        }
        throw error;
    }
};

// Verify user based on JWT token from cookies
const verify = async (token: string) => {
    try {
        console.log("Verifying user...");
        if (!token) {
            console.error("No token provided");
            throw new Error("Unauthorized");
        }

        console.log("Verifying JWT token...");
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
        console.log("Verified JWT token:", decoded);

        console.log("Finding user by ID...");
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            console.error("User not found");
            throw new Error("Unauthorized");
        }

        console.log("Verification successful");
        return { id: user._id, name: user.name, email: user.email };
    } catch (error) {
        console.error("Error during verification:", error);
        throw new Error("Invalid token");
    }
};

export default { register, login, verify };
