import { createContext, useState, useCallback } from 'react'

export const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([])
  const [selectedChatId, setSelectedChatId] = useState(null)

  const addChat = useCallback((chat) => {
    setChats(prev => [chat, ...prev])
    setSelectedChatId(chat._id)
  }, [])

  const deleteChat = useCallback((chatId) => {
    setChats(prev => prev.filter(chat => chat._id !== chatId))
    if (selectedChatId === chatId) {
      setSelectedChatId(chats.length > 1 ? chats[0]._id : null)
    }
  }, [selectedChatId, chats])

  const updateChatTitle = useCallback((chatId, newTitle) => {
    setChats(prev =>
      prev.map(chat =>
        chat._id === chatId ? { ...chat, title: newTitle } : chat
      )
    )
  }, [])

  const value = {
    chats,
    selectedChatId,
    setChats,
    setSelectedChatId,
    addChat,
    deleteChat,
    updateChatTitle
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}
