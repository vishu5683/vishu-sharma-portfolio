'use client'

import ThemeProvider from '@/components/ThemeProvider'
import dynamic from 'next/dynamic'

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
      <FooterMUI />
    </ThemeProvider>
  )
}