import { Request } from 'express';

export interface AuthRequest extends Request {
  userId: string; // Ensures it's always set after authentication
  role?: 'admin' | 'user'; // Optional role field for authorization checks
}
