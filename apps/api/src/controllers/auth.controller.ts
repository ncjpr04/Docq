import { Request, Response } from 'express';
import { z } from 'zod';
import { registerSchema, loginSchema } from '../validation/auth.schema';
import { AuthService } from '../services/auth.service';

/**
 * AuthController handles user authentication-related actions,
 * including user registration and login.
 */
export class AuthController {
  /**
   * Handles user registration.
   * Validates request data, creates a new user, and returns a response.
   */
  static async register(req: Request, res: Response) {
    console.log(`[AuthController] Register request received from ${req.ip}`, req.body);
    
    try {
      // Validate request data using Zod schema
      const validatedData = registerSchema.parse(req.body);
      const { firstName, lastName, email, password } = validatedData;

      console.log("[AuthController] Data validated successfully", { email });

      // Call AuthService to create a new user and return the token
      const { user, token } = await AuthService.createUser(firstName, lastName, email, password, res);
      console.log("[AuthController] User created successfully", { email });

      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      });

      return res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      console.error("[AuthController] Error in register:", error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: error, 
          details: error.errors 
        });
      }

      return res.status(500).json({ 
        error: error, 
        message: error instanceof Error ? error.message : 'Unexpected error' 
      });
    }
  }

  /**
   * Handles user login.
   * Validates request data, checks user credentials, and returns an authentication token.
   */
  static async login(req: Request, res: Response) {
    console.log(`[AuthController] Login request received from ${req.ip}`, req.body);

    try {
      // Validate login request body using Zod schema
      const { email, password } = loginSchema.parse(req.body);
      console.log("[AuthController] Login data validated successfully", { email });

      // Call AuthService to authenticate user and generate token
      const { user, token } = await AuthService.validateUser(email, password, res);
      console.log("[AuthController] User authenticated successfully", { email });

      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      });

      return res.json({ message: 'Login successful' });
    } catch (error) {
      console.error("[AuthController] Error in login:", error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: 'Invalid input', 
          details: error.errors 
        });
      }

      return res.status(401).json({ 
        error: 'Unauthorized', 
        message: error instanceof Error ? error.message : 'Invalid credentials' 
      });
    }
  }
}
