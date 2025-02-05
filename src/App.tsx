import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

interface ChatMessage {
  id: number
  role: 'user' | 'bot'
  content: string
}

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [userInput, setUserInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll the last message into view whenever messages change.
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    const trimmed = userInput.trim()
    if (!trimmed) return

    // 1. Insert the user's message immediately
    const timestamp = Date.now()
    setMessages(prev => [
      ...prev,
      { id: timestamp, role: 'user', content: trimmed },
    ])

    // Clear the input field
    setUserInput('')

    // 2. Optionally, add a "thinking" message from the bot
    const thinkingId = timestamp + 1
    setMessages(prev => [
      ...prev,
      {
        id: thinkingId,
        role: 'bot',
        content: 'Thinking...',
      },
    ])

    // 3. Simulate an API request for the bot response
    // This could be a real fetch call, for example:
    // const response = await fetch('/api/bot', {...})
    // const data = await response.json()
    // For now, let's just do a setTimeout to mock an async call.
    setTimeout(() => {
      // 4. Once "response" is ready, update the "Thinking..." message
      setMessages(prev => {
        return prev.map(message =>
          message.id === thinkingId
            ? {
                ...message,
                content: `🐶 Plz givez chatDog brain so he can respond to: ${trimmed}`,
              }
            : message
        )
      })
    }, 1000) // e.g. 1 second delay
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Box
      sx={{
        p: 5,
        pt: 5,
        pb: 8,
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        boxSizing: 'border-box',
      }}
    >
      <Typography variant='h3' sx={{ mb: 5 }}>
        ChatDog Potata
      </Typography>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mb: 2,
        }}
      >
        {messages.map(msg => (
          <Box
            key={msg.id}
            sx={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              p: 2,
              borderRadius: 6,
              bgcolor: msg.role === 'user' ? '#595958' : 'transparent',
              maxWidth: '85%',
            }}
          >
            <Typography sx={{ wordBreak: 'break-word' }}>
              {msg.content}
            </Typography>
          </Box>
        ))}
        {/* Scroll target for auto-scrolling to the latest message */}
        <div ref={bottomRef} />
      </Box>

      {/* Input bar */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          bgcolor: '#fff',
          p: 2,
          boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, width: '100%', maxWidth: '90%' }}>
          <TextField
            fullWidth
            multiline
            minRows={1}
            placeholder='Type your message...'
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            variant='contained'
            sx={{ borderRadius: 3 }}
            onClick={handleSend}
          >
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
