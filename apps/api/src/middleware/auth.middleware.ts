import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { connectDB, User } from '@workspace/database';
import mongoose from 'mongoose';
import type { AuthRequest } from '../types/auth';

/**
 * Middleware to authenticate users using JWT.
 * Checks if the token is valid and if the user exists in the database.
 */
export const authenticateUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log('[AUTH] Checking authorization header...');

    let token: string | undefined;
    
    // Try extracting token from Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    } 
    
    // Fallback: Try extracting token from cookies (if applicable)
    if (!token && req.cookies?.auth_token) {
      token = req.cookies.auth_token;
    }

    if (!token) {
      console.warn('[AUTH] No token provided');
      res.status(401).json({ error: 'Unauthorized: Token required' });
      return;
    }


    console.log('[AUTH] Token extracted');

    // Verify the JWT token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    } catch (err) {
      console.error('[AUTH] Token verification failed:', err);
      res.status(401).json({ error: err.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token' });
      return;
    }

    console.log('[AUTH] Token verified, UserID:', decoded.userId);

    // Connect to the database
    await connectDB();
    console.log('[AUTH] Database connected');

    // Check if the user exists in the database
    const user = await User.findById(new mongoose.Types.ObjectId(decoded.userId));
    if (!user) {
      console.warn('[AUTH] User not found in database');
      res.status(401).json({ error: 'Unauthorized: User does not exist' });
      return;
    }

    // Attach the user ID to the request object
    req.userId = decoded.userId;
    console.log('[AUTH] User authenticated successfully');

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('[AUTH] Unexpected authentication error:', error);
     res.status(500).json({ error: 'Internal server error' });
     return;
  }
};
