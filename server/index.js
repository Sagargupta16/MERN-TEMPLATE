import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import { authenticateUser } from './middleware/authMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import logger from './utils/logger.js';

const app = express();
const PORT = process.env.PORT || 5000;

const corsOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',')
  : ['http://localhost:3000', 'http://localhost:5173'];

app.use(express.json());
app.use(cors({ origin: corsOrigins }));
app.disable('x-powered-by');

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.get('/token-check', authenticateUser, (req, res) => {
  res.status(200).json({ isAuthenticated: true });
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    logger.info('Database connected');
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    logger.error('Database connection failed', err);
    process.exit(1);
  });
