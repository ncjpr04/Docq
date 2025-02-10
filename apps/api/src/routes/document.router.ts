import express from 'express';
import { DocumentController } from '../controllers/document.controller';
import { authenticateUser } from '../middleware/auth.middleware';

const router = express.Router();

// Utility function to handle async errors
const asyncHandler = (fn: Function) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Document Routes
router.post('/create', authenticateUser, asyncHandler(DocumentController.createDocument));
router.get('/all', authenticateUser, asyncHandler(DocumentController.getAllDocuments));

export default router;
