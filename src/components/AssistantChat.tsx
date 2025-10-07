'use client'

import { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Chip,
  CircularProgress,
  Alert,
  Divider,
} from '@mui/material'
import { Send, SmartToy, Person } from '@mui/icons-material'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  sources?: Array<{
    type: string
    content?: string
    title?: string
    description?: string
    similarity: number
  }>
}

export default function AssistantChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I&apos;m your AI assistant. Ask me anything about Vishu&apos;s experience, projects, or skills!",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ q: input }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response')
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.answer,
        sources: data.sources,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get response')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 600 }}>
        AI Portfolio Assistant
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: 'text.secondary' }}>
        Ask me anything about Vishu&apos;s experience, projects, or technical skills!
      </Typography>

      <Card sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ height: 400, overflow: 'auto', p: 2 }}>
            <Stack spacing={2}>
              {messages.map((message) => (
                <Box
                  key={message.id}
                  sx={{
                    display: 'flex',
                    justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      maxWidth: '80%',
                      flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: message.role === 'user' ? 'primary.main' : 'secondary.main',
                        width: 32,
                        height: 32,
                      }}
                    >
                      {message.role === 'user' ? <Person /> : <SmartToy />}
                    </Avatar>
                    <Box>
                      <Card
                        sx={{
                          p: 2,
                          bgcolor: message.role === 'user' ? 'primary.light' : 'grey.100',
                          color: message.role === 'user' ? 'white' : 'text.primary',
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                          {message.content}
                        </Typography>
                      </Card>
                      
                      {message.sources && message.sources.length > 0 && (
                        <Box sx={{ mt: 1, ml: 1 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                            Sources:
                          </Typography>
                          <Stack spacing={1}>
                            {message.sources.map((source, index) => (
                              <Chip
                                key={index}
                                label={
                                  source.type === 'resume'
                                    ? `Resume: ${source.content?.substring(0, 50)}...`
                                    : `Project: ${source.title}`
                                }
                                size="small"
                                sx={{
                                  backgroundColor: 'secondary.light',
                                  color: 'white',
                                  fontSize: '0.75rem',
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}
              
              {loading && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 5 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                    <SmartToy />
                  </Avatar>
                  <Card sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CircularProgress size={16} />
                      <Typography variant="body2">Thinking...</Typography>
                    </Box>
                  </Card>
                </Box>
              )}
            </Stack>
          </Box>
          
          <Divider />
          
          <Box sx={{ p: 2 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            
            <Stack direction="row" spacing={2}>
              <TextField
                fullWidth
                placeholder="Ask about Vishu's experience, projects, or skills..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={loading}
                multiline
                maxRows={3}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleSend}
                disabled={loading || !input.trim()}
                startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                sx={{
                  px: 3,
                  borderRadius: 2,
                  minWidth: 100,
                }}
              >
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
