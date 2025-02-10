import { Response } from 'express';
import { z } from 'zod';
import { documentSchema } from '../validation/document.schema';
import type { AuthRequest } from '../types/auth';
import { DocumentService } from '../services/document.service';

export class DocumentController {
  /**
   * Handles document creation.
   * Validates request body, checks user authentication, and creates a new document.
   */
  static async createDocument(req: AuthRequest, res: Response) {
    console.log('Received request to create document:', req.body);
    try {
      // Validate the request body using Zod schema
      const validatedData = documentSchema.parse(req.body);
      console.log('Validated request data:', validatedData);

      const { title, content } = validatedData;
      const userId = req.userId;

      // Check if userId exists (authentication check)
      if (!userId) {
        console.warn('Unauthorized access attempt');
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Create a new document
      const document = await DocumentService.createDocument(userId, title, content);
      console.log('Document created successfully:', document);
      return res.status(201).json(document);
    } catch (error) {
      console.error('Error creating document:', error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Invalid input', details: error.errors });
      }
      if (error instanceof Error) {
        return res.status(500).json({ error: 'Failed to create document', message: error.message });
      }
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  /**
   * Retrieves all documents belonging to the authenticated user.
   */
  static async getAllDocuments(req: AuthRequest, res: Response) {
    console.log('Received request to fetch all documents for user:', req.userId);
    try {
      const userId = req.userId;
      if (!userId) {
        console.warn('Unauthorized access attempt');
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Fetch documents for the user
      const documents = await DocumentService.getDocuments(userId);
      console.log(`Fetched ${documents.length} documents for user:`, userId);
      return res.json(documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
      if (error instanceof Error) {
        return res.status(500).json({ error: 'Failed to fetch documents', message: error.message });
      }
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}
