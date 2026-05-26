# 🚀 Trailblazer AI - Setup Guide

## Prerequisites
- Node.js v16+ 
- npm or yarn
- MongoDB URI (MongoDB Atlas or local)
- Grok API Key

---

## Backend Setup

### 1. Navigate to backend folder
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
Copy `.env.example` to `.env` and fill in your credentials:
```bash
cp .env.example .env
```

### 4. Add your credentials to `.env`
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GROK_API_KEY=your_grok_api_key
PORT=5000
NODE_ENV=development
```

### 5. Start the backend server
```bash
npm start
```

Backend will run on `http://localhost:5000`

---

## Frontend Setup

### 1. Navigate to frontend folder (in new terminal)
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```bash
cp .env.example .env
```

### 4. Configure `.env`
```
VITE_API_BASE_URL=http://localhost:5000/api
```

### 5. Start the frontend
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## How to Get API Keys

### MongoDB URI
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Replace `<password>` with your database password

### Grok API Key
1. Visit [xAI/Grok Console](https://console.x.ai/)
2. Sign up or login
3. Create new API key
4. Copy and paste in `.env`

---

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Chat
- `POST /api/chat` - Create new chat
- `GET /api/chat/:id` - Get chat messages
- `POST /api/chat/:id/message` - Send message
- `GET /api/chat` - Get all user chats
- `DELETE /api/chat/:id` - Delete chat

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

---

## Troubleshooting

### Backend won't start
- Check if MongoDB URI is correct
- Ensure all dependencies are installed: `npm install`
- Check if port 5000 is available

### Frontend connection issues
- Ensure backend is running on port 5000
- Check `VITE_API_BASE_URL` in `.env`
- Clear browser cache and localStorage

### Grok API errors
- Verify API key is correct
- Check if quota is remaining
- Ensure request format is correct

---

## Project Structure

```
trailblazer-ai/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## Features

✅ User Authentication (Sign up/Login)
✅ Real-time Chat Interface
✅ Grok AI Integration
✅ Multiple Chat Management
✅ Message History
✅ Responsive Design
✅ Context-based State Management

---

## Support

For issues, check:
1. MongoDB connection
2. API keys validity
3. Environment variables
4. CORS settings

Happy coding! 🎉
