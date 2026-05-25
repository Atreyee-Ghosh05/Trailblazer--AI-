# 🚀 TrailBlazer AI - Premium Futuristic AI Assistant

**Powered by Atreyee Ghosh ✨**

A full-stack, premium SaaS AI application with real-time chat, authentication, and Grok AI integration.

## 🌟 Features

- ✅ **Futuristic UI** - Dark mode, glassmorphism, neon glow effects
- ✅ **Real-time Chat** - Instant AI responses with typing animation
- ✅ **Authentication** - Firebase + JWT token-based auth
- ✅ **Grok AI Integration** - Use your own Grok API key
- ✅ **Chat History** - Save and manage conversations
- ✅ **Responsive Design** - Works on all devices
- ✅ **Database** - MongoDB for data persistence
- ✅ **Production Ready** - Deploy to Vercel & Render

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM
- Lucide React Icons
- Axios for API calls
- Firebase Authentication

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Grok API (xai)
- CORS enabled
- Environment variables (.env)

## 📁 Project Structure

```
Trailblazer--AI-/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- MongoDB Atlas account
- Grok API key from x.ai

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Add your credentials to .env
npm run dev
```

Server runs on `http://localhost:5000`

## 🔑 Environment Variables

Create `.env` in backend folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GROK_API_KEY=your_grok_api_key_from_xai
PORT=5000
NODE_ENV=development
```

## 📱 Available Routes

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout

### Chat
- `POST /api/chat/message` - Send message to Grok AI
- `GET /api/chat/history` - Get chat history
- `DELETE /api/chat/:id` - Delete chat

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile

## 🎨 UI Components

- Landing Page with hero section
- Authentication (Login/Signup)
- Chat Dashboard with sidebar
- Real-time message display
- Loading animations
- Error handling

## 🔐 Authentication Flow

1. User signs up with email/password
2. Password hashed with bcryptjs
3. JWT token generated on login
4. Token stored in localStorage
5. Protected routes use middleware

## 💬 Chat System

1. User sends message
2. Backend receives via Express
3. Message sent to Grok API
4. Response streamed back
5. Message saved to MongoDB
6. UI updates in real-time

## 📦 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Backend (Render/Railway)
```bash
# Push code to GitHub
# Connect to Render/Railway
# Set environment variables
# Deploy!
```

## 📝 API Examples

### Send Message to Grok
```bash
POST /api/chat/message
Content-Type: application/json
Authorization: Bearer your_jwt_token

{
  "message": "What is AI?"
}
```

### Get Chat History
```bash
GET /api/chat/history
Authorization: Bearer your_jwt_token
```

## 🎯 Next Steps

1. ✅ Setup MongoDB Atlas
2. ✅ Get Grok API key from x.ai
3. ✅ Clone this repository
4. ✅ Configure `.env` file
5. ✅ Run frontend & backend
6. ✅ Test the app locally
7. ✅ Deploy to production

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 📄 License

MIT License - feel free to use this project

## 📧 Support

For issues or questions, open an issue on GitHub.

---

**Powered by Atreyee Ghosh ✨**

Built with ❤️ for AI enthusiasts & developers
