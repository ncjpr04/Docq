import { Request, Response } from "express";
import AuthService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
    console.log("[AUTH] Registration request received:", { email: req.body.email });
    try {
        const { token, user } = await AuthService.register(req.body);
        console.log("[AUTH] Registration successful:", { userId: user.id });
        
        // Set secure cookie
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        
        return res.status(201).json({
            success: true,
            message: "Registration successful",
            user
        });
    } catch (error: any) {
        console.error("[AUTH] Registration failed:", error);
        return res.status(400).json({
            success: false,
            message: error.message || "Registration failed"
        });
    }
};

export const login = async (req: Request, res: Response) => {
    console.log("[AUTH] Login request received:", { email: req.body.email });
    try {
        const { token, user } = await AuthService.login(req.body);
        console.log("[AUTH] Login successful:", { userId: user.id });

        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.json({
            success: true,
            message: "Login successful",
            user
        });
    } catch (error: any) {
        console.error("[AUTH] Login failed:", error);
        return res.status(400).json({
            success: false,
            message: error.message || "Login failed"
        });
    }
};

export const verify = async (req: Request, res: Response) => {
    console.log("[AUTH] Verification request received");
    try {
        const token = req.cookies.jwt;
        if (!token) {
            console.log("[AUTH] No token found");
            return res.status(401).json({
                success: false,
                message: "No authentication token"
            });
        }

        const user = await AuthService.verify(token);
        console.log("[AUTH] Verification successful:", { userId: user.id });
        
        return res.json({
            success: true,
            user
        });
    } catch (error: any) {
        console.error("[AUTH] Verification failed:", error);
        return res.status(401).json({
            success: false,
            message: "Invalid or expired session"
        });
    }
};

export const logout = async (_req: Request, res: Response) => {
    console.log("[AUTH] Logout request received");
    try {
        // Clear the cookie with the same settings as when it was set
        res.clearCookie("jwt", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: '/' // Important: must match the path used when setting
        });
        
        console.log("[AUTH] Logout successful");
        return res.json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error: any) {
        console.error("[AUTH] Logout failed:", error);
        return res.status(500).json({
            success: false,
            message: "Logout failed"
        });
    }
};
