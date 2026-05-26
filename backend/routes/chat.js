import express from 'express';
import {
  sendMessage,
  getChatHistory,
  getChat,
  deleteChat
} from '../controllers/chatController.js';

const router = express.Router();

// Create new chat or add message to existing chat
router.post('/message', sendMessage);
router.post('/:chatId/message', sendMessage);

// Get all chats
router.get('/history', getChatHistory);

// Get specific chat
router.get('/:chatId', getChat);

// Delete chat
router.delete('/:chatId', deleteChat);

export default router;
