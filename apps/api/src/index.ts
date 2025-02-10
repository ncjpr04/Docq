import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import authRouter from './routes/auth.router';
import documentRouter from './routes/document.router';

dotenv.config();

const app = express();

// Improved Rate Limiting - Only on Auth Routes
const authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 10, // Limit each IP to 10 login/register requests per window
  message: { error: 'Too many requests, please try again later.' },
  headers: true
});

// CORS Configuration - Restrict to specific origins
const allowedOrigins = ['http://localhost:3000', 'https://yourdomain.com'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
console.log("In index.ts above authRouter");
app.use('/auth', authLimiter, authRouter); // Apply rate limiter only to auth
console.log("In index.ts above documentRouter");
app.use('/documents', documentRouter);

// Centralized Error Handling Middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: err.message || 'Something went wrong!' });
});

// Catch Unhandled Promise Rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
