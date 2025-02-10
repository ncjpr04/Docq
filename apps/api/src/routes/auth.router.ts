import express from 'express';
import { AuthController } from '../controllers/auth.controller';
import { validateRequest } from '../middleware/validation.middleware';
import { registerSchema, loginSchema } from '../validation/auth.schema';

const router = express.Router();

// Utility function to handle async errors in Express routes
const asyncHandler = (fn: Function) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

console.log("Initializing auth routes...");

// Register Route
console.log("Setting up /register route...");
router.post(
  '/register',
  validateRequest({ body: registerSchema }),
  asyncHandler(AuthController.register)
);

// Login Route
console.log("Setting up /login route...");
router.post(
  '/login',
  validateRequest({ body: loginSchema }),
  asyncHandler(AuthController.login)
);

// Logout Route
console.log("Setting up /logout route...");
router.post('/logout', asyncHandler(AuthController.logout));

console.log("Auth routes initialized.");

export default router;
