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
  Chip,
  CircularProgress,
  Alert,
} from '@mui/material'
import { Search, Code, Launch } from '@mui/icons-material'

interface SearchResult {
  id: string
  title: string
  description: string
  technologies: string[]
  url?: string
  github_url?: string
  similarity: number
}

export default function SemanticSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    if (!query.trim()) return

    setLoading(true)
    setError('')
    setResults([])

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ q: query, k: 5 }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Search failed')
      }

      setResults(data.results || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 600 }}>
        AI-Powered Project Search
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: 'text.secondary' }}>
        Search through my projects using natural language. Find projects by technology, features, or concepts.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="e.g., 'React dashboard with real-time data' or 'machine learning API'"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          startIcon={loading ? <CircularProgress size={20} /> : <Search />}
          sx={{
            px: 3,
            borderRadius: 2,
          }}
        >
          {loading ? 'Searching...' : 'Search'}
        </Button>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {results.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Search Results ({results.length})
          </Typography>
          <Stack spacing={2}>
            {results.map((result) => (
              <Card key={result.id} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {result.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {result.description}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    {result.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.light',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={2}>
                    {result.github_url && (
                      <Button
                        size="small"
                        startIcon={<Code />}
                        href={result.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: 'none' }}
                      >
                        View Code
                      </Button>
                    )}
                    {result.url && (
                      <Button
                        size="small"
                        startIcon={<Launch />}
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: 'none' }}
                      >
                        Live Demo
                      </Button>
                    )}
                  </Stack>

                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    Similarity: {(result.similarity * 100).toFixed(1)}%
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      )}

      {!loading && results.length === 0 && query && (
        <Alert severity="info">
          No projects found matching your search. Try different keywords or be more specific.
        </Alert>
      )}
    </Box>
  )
}
