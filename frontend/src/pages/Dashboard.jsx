import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'
import { LogOut, Menu, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [chats, setChats] = useState([])
  const [selectedChatId, setSelectedChatId] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch chats on mount
  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    fetchChats()

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [user, navigate])

  const fetchChats = async () => {
    try {
      setLoading(true)
      const response = await api.get('/chat/history')
      setChats(response.data)
      if (response.data.length > 0) {
        setSelectedChatId(response.data[0]._id)
      }
    } catch (error) {
      console.error('Error fetching chats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleNewChat = () => {
    setSelectedChatId(null)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const handleDeleteChat = async (chatId) => {
    try {
      await api.delete(`/chat/${chatId}`)
      setChats(chats.filter(chat => chat._id !== chatId))
      if (selectedChatId === chatId) {
        setSelectedChatId(chats.length > 1 ? chats[0]._id : null)
      }
    } catch (error) {
      console.error('Error deleting chat:', error)
    }
  }

  const handleChatCreated = (newChat) => {
    setChats([newChat, ...chats])
    setSelectedChatId(newChat._id)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex">
      {/* Mobile Menu Toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed md:relative w-64 h-screen bg-gradient-to-b from-gray-800 to-gray-900 border-r border-white/10 z-40">
          <Sidebar 
            chats={chats}
            selectedChat={selectedChatId}
            onSelectChat={handleSelectChat}
            onNewChat={handleNewChat}
            onDeleteChat={handleDeleteChat}
          />
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-white/10 backdrop-blur-md p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold gradient-text">TrailBlazer AI</h1>
            <p className="text-sm text-gray-400">Welcome, {user?.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 text-red-400 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Chat Window */}
        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-400">Loading chats...</p>
            </div>
          </div>
        ) : (
          <ChatWindow 
            chatId={selectedChatId} 
            onChatCreated={handleChatCreated}
            onChatsUpdated={fetchChats}
          />
        )}
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default Dashboard
