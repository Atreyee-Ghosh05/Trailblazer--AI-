import express from 'express';
import {
  sendMessage,
  getChatHistory,
  getChat,
  deleteChat
} from '../controllers/chatController.js';

const router = express.Router();

router.post('/message', sendMessage);
router.get('/history', getChatHistory);
router.get('/:chatId', getChat);
router.delete('/:chatId', deleteChat);

export default router;
