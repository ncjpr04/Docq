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
    console.log('[DOCUMENT] Creating a document:', req.body);
    try {
      const validatedData = documentSchema.parse(req.body);
      console.log('[DOCUMENT] Validated request data:', validatedData);

      const { title, content } = validatedData;
      const userId = req.userId as string; // Safe to assume it's defined due to authentication middleware

      const document = await DocumentService.createDocument(userId, title, content);
      console.log('[DOCUMENT] Document created:', document);

      return res.status(201).json(document);
    } catch (error) {
      console.error('[DOCUMENT] Error creating document:', error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Invalid input', details: error.errors });
      }

      return res.status(500).json({
        error: 'Failed to create document',
        message: error instanceof Error ? error.message : 'Unexpected error',
      });
    }
  }

  /**
   * Retrieves all documents belonging to the authenticated user.
   */
  static async getAllDocuments(req: AuthRequest, res: Response) {
    console.log('[DOCUMENT] Fetching documents for user:', req.userId);
    try {
      const userId = req.userId as string;

      const documents = await DocumentService.getDocuments(userId);
      console.log(`[DOCUMENT] Retrieved ${documents.length} documents for user: ${userId}`);

      return res.json(documents);
    } catch (error) {
      console.error('[DOCUMENT] Error fetching documents:', error);

      return res.status(500).json({
        error: 'Failed to fetch documents',
        message: error instanceof Error ? error.message : 'Unexpected error',
      });
    }
  }
}
