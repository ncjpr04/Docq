import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    console.log("[Middleware] Authenticating request...");
    
    const token = req.cookies.jwt;
    if (!token) {
        console.log("[Middleware] No JWT token found");
        return res.status(401).json({
            success: false,
            message: "Authentication required"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        console.log("[Middleware] Token verified successfully");
        next();
    } catch (error) {
        console.error("[Middleware] Token verification failed:", error);
        res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};
