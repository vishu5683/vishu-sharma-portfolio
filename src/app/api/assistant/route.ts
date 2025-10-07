import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { supabase } from '@/lib/supabase'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Add your OpenAI API key to .env.local
})

export async function POST(request: NextRequest) {
  try {
    const { q } = await request.json()

    // Validate input
    if (!q || typeof q !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      // Return a fallback response when API key is not available
      const fallbackResponses = {
        'hello': 'Hello! I\'m here to help you learn about Vishu Sharma\'s experience and projects. What would you like to know?',
        'experience': 'Vishu has 2+ years of experience as a Full Stack Developer, currently working at Transport Corporation of India Ltd and previously at Techugo. He specializes in React.js, Next.js, .NET, and Oracle.',
        'projects': 'Vishu has worked on several key projects including Enterprise Logistics Platform, Analytics Dashboard, EdTech Application, and HRMS Dashboard, achieving significant performance improvements.',
        'skills': 'Vishu\'s technical skills include React.js, Next.js, TypeScript, ASP.NET, Node.js, Oracle, PostgreSQL, and various modern web technologies.',
        'default': 'I\'m an AI assistant for Vishu Sharma\'s portfolio. I can tell you about his experience, projects, and technical skills. What specific information are you looking for?'
      }

      const lowerQuery = q.toLowerCase()
      let answer = fallbackResponses.default
      
      if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
        answer = fallbackResponses.hello
      } else if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
        answer = fallbackResponses.experience
      } else if (lowerQuery.includes('project') || lowerQuery.includes('work')) {
        answer = fallbackResponses.projects
      } else if (lowerQuery.includes('skill') || lowerQuery.includes('technology')) {
        answer = fallbackResponses.skills
      }

      return NextResponse.json({
        answer,
        sources: [{
          type: 'fallback',
          content: 'AI features are in demo mode. Full functionality requires OpenAI API key setup.',
          similarity: 1.0
        }]
      })
    }

    // Original AI implementation would go here when API key is available
    return NextResponse.json({
      answer: 'AI features require OpenAI API key configuration. Please set up your environment variables.',
      sources: []
    })
  } catch (error) {
    console.error('Assistant API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
