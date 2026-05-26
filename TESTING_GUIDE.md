# 🧪 Complete Testing Guide for TrailBlazer AI

## Step 1: Setup & Installation 🔧

### Backend Setup
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env and add your keys:
# MONGO_URI=your_mongodb_connection
# JWT_SECRET=your_secret_key
# GROK_API_KEY=your_grok_api_key
# PORT=5000
```

### Frontend Setup
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local and add:
# VITE_API_URL=http://localhost:5000/api
```

---

## Step 2: Start Both Servers 🚀

### Terminal 1 - Start Backend
```bash
cd backend
npm run dev
```

**Expected Output:**
```
✅ MongoDB Connected
🚀 Server running on port 5000
📡 API: http://localhost:5000/api
✅ Health: http://localhost:5000/api/health
```

### Terminal 2 - Start Frontend
```bash
cd frontend
npm run dev
```

**Expected Output:**
```
VITE v4.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
➜  Press h to show help
```

---

## Step 3: Test in Browser 🌐

### Open Browser
Go to: **http://localhost:5173**

You should see the **Landing Page** with:
- ✅ TrailBlazer AI logo
- ✅ "Get Started" button
- ✅ "Sign In" button
- ✅ Features section

---

## Step 4: Test Signup Flow ✍️

### Click "Get Started" or "Sign Up"

**Fill the Form:**
```
Full Name: Test User
Email: test@example.com
Password: Password123
Confirm Password: Password123
```

### What Should Happen:
- ✅ Form validates inputs
- ✅ "Sign Up" button shows loading spinner
- ✅ After 2-3 seconds, redirects to **Dashboard**
- ✅ User is logged in with JWT token saved

### Check in Browser Console (F12):
```javascript
// Open DevTools → Application → LocalStorage
// You should see:
localStorage.token = "eyJhbGciOiJIUzI1NiIs..."
localStorage.user = '{"id":"...","name":"Test User","email":"test@example.com"}'
```

---

## Step 5: Test Dashboard 📊

### Dashboard Should Show:
- ✅ Welcome message: "Welcome, Test User"
- ✅ Sidebar on the left with "New Chat" button
- ✅ Empty chat area with "💬 Start a conversation"
- ✅ Logout button in top right

### Check Network Tab:
1. Open DevTools → Network tab
2. Look for API call: `GET /api/chat/history`
3. Should return: `[]` (empty array, no chats yet)

---

## Step 6: Test New Chat Creation 🆕

### Click "New Chat" Button
- ✅ Chat input area appears
- ✅ You can type in the message box
- ✅ "Send" button is active

### Type a Message:
```
"Hello, what is AI?"
```

### Click Send Button
- ✅ Message appears in blue bubble on right (user)
- ✅ Loading spinner appears
- ✅ After 2-3 seconds, AI response appears in gray bubble on left
- ✅ New chat appears in sidebar with title (first 30 chars of your message)

### Check Network Tab:
Look for API calls:
- `POST /api/chat/message` or `POST /api/chat/xyz/message`
- Response should contain: `chatId`, `success: true`, `message: "AI response..."`

---

## Step 7: Test Multiple Messages 💬

### Send 3-4 More Messages:
```
You: "Tell me about machine learning"
AI: [Response...]
You: "What are neural networks?"
AI: [Response...]
```

### Verify:
- ✅ All messages display correctly
- ✅ Chat auto-scrolls to latest message
- ✅ Loading spinner shows while waiting for AI
- ✅ Messages persist (don't disappear on refresh)

---

## Step 8: Test Chat History 📜

### Refresh Page (F5)
- ✅ Dashboard reloads
- ✅ Sidebar shows the chat you created with correct title
- ✅ Messages are still visible
- ✅ No errors in console

### Check Network:
- `GET /api/chat/history` should return the chat with all messages

---

## Step 9: Test Chat Selection 🔄

### Click Different Chats in Sidebar:
- ✅ Chat window updates with selected chat's messages
- ✅ Input field remains empty
- ✅ Can send new messages to selected chat

### Create Multiple Chats:
- Click "New Chat" again
- Send different messages
- Should show multiple chats in sidebar

---

## Step 10: Test Delete Chat 🗑️

### Right-click or Find Delete Option:
*(Note: You may need to add delete button in Sidebar component)*

Expected behavior:
- ✅ Chat deleted from sidebar
- ✅ If it was selected, next chat auto-selects
- ✅ Network shows `DELETE /api/chat/:chatId`

---

## Step 11: Test Logout 🚪

### Click "Logout" Button
- ✅ Redirects to Landing page
- ✅ LocalStorage cleared (token removed)
- ✅ Cannot access dashboard without re-login

### Try to Access Dashboard Directly:
Go to `http://localhost:5173/dashboard`
- ✅ Redirects to login page automatically

---

## Step 12: Test Login 🔐

### Click "Sign In"
Fill the form:
```
Email: test@example.com
Password: Password123
```

### What Should Happen:
- ✅ Login successful
- ✅ Redirects to dashboard
- ✅ Previous chat history appears
- ✅ Can continue chatting

---

## Step 13: Test Error Scenarios ⚠️

### Test Invalid Credentials:
```
Email: test@example.com
Password: WrongPassword
```
- ✅ Shows error message: "Invalid credentials"
- ✅ Doesn't redirect to dashboard

### Test Duplicate Email:
```
Email: test@example.com (already used)
```
- ✅ Shows error: "User already exists"

### Test Empty Fields:
- ✅ Form prevents submission with empty fields
- ✅ Shows validation messages

### Test Empty Message:
- Try to send empty message in chat
- ✅ Send button disabled or shows error

---

## Step 14: Test Mobile Responsiveness 📱

### Open DevTools → Toggle Device Toolbar
- ✅ Press `Ctrl+Shift+M` (or `Cmd+Shift+M` on Mac)
- Choose iPhone or Android device

### Verify Mobile Experience:
- ✅ Sidebar collapses to hamburger menu
- ✅ Click menu button shows/hides sidebar
- ✅ Chat window takes full width
- ✅ Messages display properly on small screen
- ✅ Input field and send button are usable

---

## Step 15: Check Browser Console 🖥️

### Open DevTools (F12) → Console Tab

### Look for:
- ✅ **No red errors**
- ✅ **No warnings about missing props**
- ✅ Any API errors should be caught and logged

### Common Errors to Avoid:
```javascript
// ❌ Bad - CORS error
// Access to XMLHttpRequest blocked by CORS policy
// Fix: Check backend CORS setup

// ❌ Bad - 404 Not Found
// POST http://localhost:5000/api/chat/message 404
// Fix: Check backend routes

// ❌ Bad - 401 Unauthorized
// No token or invalid token
// Fix: Check JWT middleware

// ❌ Bad - 500 Server Error
// Check backend logs for details
```

---

## Step 16: Check Backend Logs 📝

### Terminal where backend is running:
Should show logs like:
```
✅ MongoDB Connected
🚀 Server running on port 5000

[Request Log]:
POST /api/auth/signup
Status: 201
Message: User created successfully

GET /api/chat/history
Status: 200
Messages: 2 chats found

POST /api/chat/xyz/message
Status: 200
Message: AI response generated
```

### Watch for errors:
- Connection timeouts
- MongoDB errors
- Grok API errors (check GROK_API_KEY)

---

## 🧪 Quick Test Checklist

Copy and paste this checklist:

```
SIGNUP FLOW:
- [ ] Form validation works
- [ ] Signup API call successful (201)
- [ ] Redirects to dashboard
- [ ] Token saved in localStorage
- [ ] User data saved in localStorage

LOGIN FLOW:
- [ ] Login API call successful (200)
- [ ] Redirects to dashboard
- [ ] Previous chats load
- [ ] Token refreshed

CHAT OPERATIONS:
- [ ] Fetch chat history (GET /api/chat/history)
- [ ] Send new message (POST /api/chat/message)
- [ ] Add to existing chat (POST /api/chat/:id/message)
- [ ] Get chat details (GET /api/chat/:id)
- [ ] Delete chat (DELETE /api/chat/:id)

MESSAGE DISPLAY:
- [ ] User messages on right (blue)
- [ ] AI messages on left (gray)
- [ ] Timestamps visible
- [ ] Auto-scroll to latest
- [ ] Loading spinner shows

UI/UX:
- [ ] Responsive on mobile
- [ ] Hamburger menu works
- [ ] No console errors
- [ ] Smooth transitions
- [ ] Buttons respond immediately

ERROR HANDLING:
- [ ] Invalid email shows error
- [ ] Wrong password shows error
- [ ] Network error handled gracefully
- [ ] API errors logged
```

---

## 🐛 Common Issues & Fixes

### Issue 1: "Cannot find module 'express'"
```bash
# Fix: npm install in backend directory
cd backend && npm install
```

### Issue 2: "MongoDB Connection Failed"
```
# Fix: Check MONGO_URI in .env
# Make sure IP is whitelisted on MongoDB Atlas
# Check username/password
```

### Issue 3: "GROK_API_KEY not found"
```
# Fix: Add GROK_API_KEY to .env
# Get key from: https://console.x.ai
```

### Issue 4: "CORS Error"
```
# Fix: Backend CORS is set to http://localhost:5173
# If using different port, update FRONTEND_URL in .env
```

### Issue 5: "Token expired"
```
# Fix: Clear localStorage and login again
# Or extend token expiry in backend (.env JWT_SECRET)
```

### Issue 6: "Chat not loading"
```
# Fix: Check if chat exists in MongoDB
# Verify chatId is correct
# Check MongoDB connection
```

---

## 📊 API Testing with Postman (Optional)

### Test Backend Directly:

**1. Test Health Endpoint:**
```
GET http://localhost:5000/api/health
Expected: { "status": "Backend is running! 🚀" }
```

**2. Test Signup:**
```
POST http://localhost:5000/api/auth/signup
Body: {
  "name": "Test User",
  "email": "test@postman.com",
  "password": "Password123"
}
Expected: { "token": "...", "user": {...} }
```

**3. Test Login:**
```
POST http://localhost:5000/api/auth/login
Body: {
  "email": "test@postman.com",
  "password": "Password123"
}
Expected: { "token": "...", "user": {...} }
```

**4. Test Chat History (with token):**
```
GET http://localhost:5000/api/chat/history
Header: Authorization: Bearer [TOKEN_FROM_LOGIN]
Expected: [{ "_id": "...", "title": "...", "messages": [...] }]
```

---

## ✨ You're All Set!

Now test your application and share any errors you encounter. 

**Good luck! 🚀**
