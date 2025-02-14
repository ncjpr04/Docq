import { z } from "zod";

const isProd = process.env.NODE_ENV === 'production';

const PASSWORD_REQUIREMENTS = {
    minLength: 8,
    patterns: {
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        number: /[0-9]/,
        special: /[\W_]/
    }
};

const getPasswordValidationError = (type: string): string => {
    const messages = {
        minLength: `Password must be at least ${PASSWORD_REQUIREMENTS.minLength} characters`,
        uppercase: "Password must contain at least one uppercase letter",
        lowercase: "Password must contain at least one lowercase letter",
        number: "Password must contain at least one number",
        special: "Password must contain at least one special character"
    };
    return messages[type as keyof typeof messages] || "Invalid password format";
};

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export const RegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(PASSWORD_REQUIREMENTS.minLength, getPasswordValidationError("minLength"))
    .regex(PASSWORD_REQUIREMENTS.patterns.uppercase, getPasswordValidationError("uppercase"))
    .regex(PASSWORD_REQUIREMENTS.patterns.lowercase, getPasswordValidationError("lowercase"))
    .regex(PASSWORD_REQUIREMENTS.patterns.number, getPasswordValidationError("number"))
    .regex(PASSWORD_REQUIREMENTS.patterns.special, getPasswordValidationError("special"))
});

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(PASSWORD_REQUIREMENTS.minLength, "Invalid email or password")
    .regex(PASSWORD_REQUIREMENTS.patterns.uppercase, "Invalid email or password")
    .regex(PASSWORD_REQUIREMENTS.patterns.lowercase, "Invalid email or password")
    .regex(PASSWORD_REQUIREMENTS.patterns.number, "Invalid email or password")
    .regex(PASSWORD_REQUIREMENTS.patterns.special, "Invalid email or password")
});

type RegisterInputType = z.infer<typeof RegisterSchema>;
type LoginInputType = z.infer<typeof LoginSchema>;

// Helper function to format validation errors
export const formatValidationErrors = (error: z.ZodError): string => {
    return error.errors.map(err => {
        // For login, always return generic message
        if (err.path[0] === 'password' && err.path.length === 1) {
            return "Invalid email or password";
        }
        return err.message;
    }).join(", ");
};
