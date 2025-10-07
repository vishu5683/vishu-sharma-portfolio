import type { Metadata } from 'next'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vishu-sharma-portfolio.vercel.app'),
  title: 'Vishu Sharma - Full Stack Developer',
  description: 'Full Stack Developer specializing in React.js, Next.js, .NET, and Enterprise Solutions. 2+ years of experience building scalable web applications.',
  keywords: 'Vishu Sharma, Full Stack Developer, React.js, Next.js, .NET, Oracle, Enterprise Solutions, Portfolio',
  authors: [{ name: 'Vishu Sharma' }],
  openGraph: {
    title: 'Vishu Sharma - Full Stack Developer',
    description: 'Full Stack Developer specializing in React.js, Next.js, .NET, and Enterprise Solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://vishusharma.dev',
    siteName: 'Vishu Sharma Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vishu Sharma - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishu Sharma - Full Stack Developer',
    description: 'Full Stack Developer specializing in React.js, Next.js, .NET, and Enterprise Solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vishusharma.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}