import type { Metadata, Viewport } from 'next'
import './globals.css'

const description =
  'Vishu Sharma, Full Stack Developer (C#, ASP.NET Core, React, TypeScript, Oracle) with 3.5+ years building production apps in enterprise logistics and EdTech.'

export const metadata: Metadata = {
  metadataBase: new URL('https://vishu-sharma-portfolio.vercel.app'),
  title: 'Vishu Sharma | Full Stack Developer',
  description,
  keywords: [
    'Vishu Sharma', 'Full Stack Developer', 'React', 'Angular', 'ASP.NET Core', '.NET Core', 'C#',
    'TypeScript', 'Oracle', 'PL/SQL', 'AWS Textract', 'OpenAI', 'Gurugram',
  ],
  authors: [{ name: 'Vishu Sharma' }],
  openGraph: {
    title: 'Vishu Sharma | Full Stack Developer',
    description,
    type: 'profile',
    locale: 'en_US',
    siteName: 'Vishu Sharma',
  },
  twitter: { card: 'summary', title: 'Vishu Sharma | Full Stack Developer', description },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b1120' },
    { media: '(prefers-color-scheme: light)', color: '#f7f8fb' },
  ],
}

const themeScript = `try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
