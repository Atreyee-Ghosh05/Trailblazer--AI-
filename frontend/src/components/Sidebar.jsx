import { Plus, MessageSquare, LogOut } from 'lucide-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Sidebar = ({ chats, selectedChat, onSelectChat, onNewChat }) => {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <button
          onClick={onNewChat}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <Plus className="w-5 h-5" />
          New Chat
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {chats.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No chats yet</p>
          </div>
        ) : (
          chats.map((chat) => (
            <button
              key={chat._id}
              onClick={() => onSelectChat(chat._id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition truncate ${
                selectedChat === chat._id
                  ? 'bg-cyan-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
              title={chat.title}
            >
              <MessageSquare className="w-4 h-4 inline mr-2" />
              {chat.title}
            </button>
          ))
        )}
      </div>

      {/* Logout Button */}
      <div className="p-3 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar