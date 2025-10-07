'use client'

import ThemeProvider from '@/components/ThemeProvider'
import dynamic from 'next/dynamic'
import { LazySemanticSearch, LazyAssistantChat } from '@/lib/lazy-components'

// Dynamic imports to prevent hydration issues
const HeaderMUI = dynamic(() => import('@/components/HeaderMUI'), { ssr: false })
const HeroMUI = dynamic(() => import('@/components/HeroMUI'), { ssr: false })
const AboutMUI = dynamic(() => import('@/components/AboutMUI'), { ssr: false })
const ExperienceMUI = dynamic(() => import('@/components/ExperienceMUI'), { ssr: false })
const ProjectsMUI = dynamic(() => import('@/components/ProjectsMUI'), { ssr: false })
const SkillsMUI = dynamic(() => import('@/components/SkillsMUI'), { ssr: false })
const ContactMUI = dynamic(() => import('@/components/ContactMUI'), { ssr: false })
const FooterMUI = dynamic(() => import('@/components/FooterMUI'), { ssr: false })

export default function Home() {
  return (
    <ThemeProvider>
      <HeaderMUI />
      <HeroMUI />
      <AboutMUI />
      <ExperienceMUI />
      <ProjectsMUI />
      <SkillsMUI />
      <ContactMUI />
      
      {/* AI Features Section */}
      <section id="ai-features" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            color: 'white', 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '3rem' 
          }}>
            AI-Powered Features
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '20px', 
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>🔍 Semantic Search</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.5rem' }}>
                Search through my projects using natural language. Find projects by technology, features, or concepts.
              </p>
              <LazySemanticSearch />
            </div>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '20px', 
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>🤖 AI Assistant</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.5rem' }}>
                Ask me anything about my experience, projects, or technical skills. Get instant, contextual answers!
              </p>
              <LazyAssistantChat />
            </div>
          </div>
        </div>
      </section>
      
      <FooterMUI />
    </ThemeProvider>
  )
}