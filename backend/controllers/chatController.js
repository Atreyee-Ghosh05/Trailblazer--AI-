import Chat from '../models/Chat.js';
import axios from 'axios';

export const sendMessage = async (req, res, next) => {
  try {
    const { message, chatId } = req.body;
    const userId = req.user.userId;

    // Validate input
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    // Validate Groq API Key
    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({ error: 'Groq API key is not configured' });
    }

    // Find or create chat
    let chat = chatId ? await Chat.findById(chatId) : null;
    if (!chat) {
      chat = new Chat({
        userId,
        title: message.substring(0, 30) + '...',
        messages: []
      });
    }

    // Add user message
    chat.messages.push({
      role: 'user',
      content: message
    });

    // Call Groq API
    try {
      const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: 'You are TrailBlazer AI, a premium futuristic AI assistant. Be helpful, concise, and engaging.'
          },
          ...chat.messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        ],
        temperature: 0.8,
        max_tokens: 1024
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const assistantMessage = response.data.choices[0].message.content;

      // Add assistant message
      chat.messages.push({
        role: 'assistant',
        content: assistantMessage
      });

      chat.updatedAt = new Date();
      await chat.save();

      res.json({
        success: true,
        chatId: chat._id,
        message: assistantMessage,
        reply: assistantMessage
      });
    } catch (groqError) {
      console.error('Groq API Error:', groqError.response?.data || groqError.message);
      return res.status(500).json({ error: 'Failed to get response from Groq AI: ' + (groqError.response?.data?.error?.message || groqError.message) });
    }
  } catch (error) {
    next(error);
  }
};

export const getChatHistory = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const chats = await Chat.find({ userId }).sort({ updatedAt: -1 });
    res.json(chats);
  } catch (error) {
    next(error);
  }
};

export const getChat = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const userId = req.user.userId;

    const chat = await Chat.findOne({ _id: chatId, userId });
    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    res.json(chat);
  } catch (error) {
    next(error);
  }
};

export const deleteChat = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const userId = req.user.userId;

    const chat = await Chat.findOneAndDelete({ _id: chatId, userId });
    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    res.json({ message: 'Chat deleted successfully' });
  } catch (error) {
    next(error);
  }
};
