'use client'

// Lazy load non-critical components
import dynamic from 'next/dynamic'

export const LazySemanticSearch = dynamic(() => import('@/components/SemanticSearch'), {
  loading: () => <div>Loading search...</div>,
  ssr: false,
})

export const LazyAssistantChat = dynamic(() => import('@/components/AssistantChat'), {
  loading: () => <div>Loading assistant...</div>,
  ssr: false,
})
