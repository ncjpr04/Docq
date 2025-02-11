import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

/**
 * Middleware for validating request data using Zod schemas.
 * @param {Object} schema - An object containing optional Zod schemas for body, query, and params.
 */
export const validateRequest = (schema: { body?: AnyZodObject; query?: AnyZodObject; params?: AnyZodObject }) => {
  console.log("Initializing request validation middleware...");

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Validating request...");

      // Validate body if schema is provided
      if (schema.body) {
        console.log("Validating request body...");
        req.body = await schema.body.parseAsync(req.body);
      }

      // Validate query if schema is provided
      if (schema.query) {
        console.log("Validating request query parameters...");
        req.query = await schema.query.parseAsync(req.query);
      }

      // Validate params if schema is provided
      if (schema.params) {
        console.log("Validating request URL parameters...");
        req.params = await schema.params.parseAsync(req.params);
      }

      console.log("Request validation successful.");
      next();
    } catch (error) {
      console.error("Validation failed:", error);

      // If the error is from Zod, format the response properly
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: error.message,
          details: error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message,
          })),
        });
      }

      // If it's a different type of error, return a generic response
      return res.status(500).json({
        error: "Internal Server Error",
        message: "Something went wrong during request validation.",
      });
    }
  };
};

