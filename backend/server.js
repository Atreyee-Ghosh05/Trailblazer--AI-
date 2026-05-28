import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';
import userRoutes from './routes/user.js';

// Import middleware
import { errorHandler } from './middleware/errorHandler.js';
import { authenticate } from './middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection with improved error handling
console.log('🔄 Connecting to MongoDB...');
console.log('📍 MONGO_URI:', process.env.MONGO_URI ? 'Configured ✅' : 'Not configured ❌');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    console.log('📊 Database Name: trailblazer');
  })
  .catch((err) => {
    console.log('❌ MongoDB Connection Error:', err.message);
    console.log('⚠️  Make sure your MONGO_URI is correct in .env file');
    console.log('💡 Format: mongodb+srv://username:password@cluster.mongodb.net/trailblazer');
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', authenticate, chatRoutes);
app.use('/api/user', authenticate, userRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Backend is running! 🚀',
    timestamp: new Date(),
    mongoStatus: mongoose.connection.readyState === 1 ? 'Connected ✅' : 'Disconnected ❌',
    groqStatus: process.env.GROQ_API_KEY ? 'Configured ✅' : 'Not configured ❌'
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API: http://localhost:${PORT}/api`);
  console.log(`✅ Health: http://localhost:${PORT}/api/health`);
  console.log(`🎯 Groq API Key: ${process.env.GROQ_API_KEY ? 'Configured ✅' : 'Not configured ❌'}`);
});
