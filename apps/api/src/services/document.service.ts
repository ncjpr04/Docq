import { connectDB, Document } from '@workspace/database';
import mongoose from 'mongoose';

export class DocumentService {
  static async createDocument(userId: string, title: string, content: any) {
    await connectDB();

    if (!mongoose.isValidObjectId(userId)) {
      throw new Error('Invalid user ID');
    }

    const document = await Document.create({
      userId: new mongoose.Types.ObjectId(userId),
      title: title.trim(),
      content
    });

    return document;
  }

  static async getDocuments(userId: string) {
    await connectDB();

    if (!mongoose.isValidObjectId(userId)) {
      throw new Error('Invalid user ID');
    }

    return Document.find({ userId: new mongoose.Types.ObjectId(userId) })
      .sort({ createdAt: -1 })
      .lean(); // Optimize performance by returning plain JS objects
  }
}
