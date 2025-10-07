import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { supabase } from '@/lib/supabase'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Add your OpenAI API key to .env.local
})

export async function POST(request: NextRequest) {
  try {
    const { q, k = 5 } = await request.json()

    // Validate inputs
    if (!q || typeof q !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    if (typeof k !== 'number' || k < 1 || k > 20) {
      return NextResponse.json({ error: 'k must be between 1 and 20' }, { status: 400 })
    }

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      // Return fallback project data
      const fallbackProjects = [
        {
          id: '1',
          title: 'Enterprise Logistics Platform',
          description: 'Modernized business systems using React.js, Next.js, and ASP.NET APIs, delivering 35% faster performance and improved scalability.',
          technologies: ['React.js', 'Next.js', 'ASP.NET', 'Oracle', 'PostgreSQL'],
          url: '#',
          github_url: '#',
          similarity: 0.95
        },
        {
          id: '2',
          title: 'Analytics Dashboard',
          description: 'Built real-time reporting platform with React, Chart.js, Zustand, and ASP.NET APIs, reducing decision-making time by 25%.',
          technologies: ['React.js', 'Chart.js', 'Zustand', 'ASP.NET', 'Oracle'],
          url: '#',
          github_url: '#',
          similarity: 0.90
        },
        {
          id: '3',
          title: 'EdTech Learning Platform',
          description: 'Delivered scalable learning platform (1000+ users) with live video and payment integrations, boosting user engagement by 40%.',
          technologies: ['React.js', 'Node.js', 'Agora SDK', 'SkipCash', 'MongoDB'],
          url: '#',
          github_url: '#',
          similarity: 0.85
        },
        {
          id: '4',
          title: 'HRMS Dashboard',
          description: 'Developed payroll & attendance analytics system using React, Redux Toolkit, and Tailwind, reducing HR manual effort by 30%.',
          technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
          url: '#',
          github_url: '#',
          similarity: 0.80
        }
      ]

      // Simple keyword matching for demo
      const lowerQuery = q.toLowerCase()
      const filteredProjects = fallbackProjects.filter(project => 
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
      )

      return NextResponse.json({ 
        results: filteredProjects.slice(0, k),
        message: 'Demo mode: Full search requires OpenAI API key setup.'
      })
    }

    // Original AI implementation would go here when API key is available
    return NextResponse.json({ 
      results: [],
      message: 'Search features require OpenAI API key configuration.'
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
