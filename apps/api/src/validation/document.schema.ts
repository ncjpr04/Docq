import { z } from 'zod';

export const documentSchema = z.object({
  title: z.string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" })
    .trim(),
  content: z.union([
    z.string(),  // If content is plain text
    z.record(z.any()), // If content is a JSON object
    z.array(z.any())  // If content is a list
  ])
});
