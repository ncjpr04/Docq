// types/express.d.ts
import { Request, Response, NextFunction } from 'express';
import { AuthRequest } from './auth';

export type AsyncRequestHandler = (
  req: Request | AuthRequest,
  res: Response,
  next: NextFunction
) => Promise<void>;

export type AuthRequestHandler = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => Promise<void>;