'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material'
import {
  GitHub,
  LinkedIn,
  Mail,
  Phone,
  KeyboardArrowUp,
} from '@mui/icons-material'
import { useState, useEffect } from 'react'

const FooterMUI = () => {
  const theme = useTheme()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/vishu5683',
      icon: GitHub,
      color: 'primary',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/vishu-s-314661ab',
      icon: LinkedIn,
      color: 'info',
    },
    {
      name: 'Email',
      href: 'mailto:vishubhardwaj46@gmail.com',
      icon: Mail,
      color: 'secondary',
    },
    {
      name: 'Phone',
      href: 'tel:+917351734476',
      icon: Phone,
      color: 'success',
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'grey.900',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
            `,
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #6366f1, #ec4899)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Vishu Sharma
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, lineHeight: 1.6 }}>
                  Full Stack Developer specializing in React.js, Next.js, .NET, and Enterprise Solutions. 
                  Passionate about creating digital solutions that make a real impact.
                </Typography>
                <Stack direction="row" spacing={2}>
                  {socialLinks.map((link, index) => (
                    <IconButton
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: `${link.color}.main`,
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      <link.icon />
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Quick Links
                </Typography>
                <Stack spacing={2}>
                  {quickLinks.map((link) => (
                    <Typography
                      key={link.name}
                      component="a"
                      href={link.href}
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        opacity: 0.8,
                        '&:hover': {
                          opacity: 1,
                          color: 'primary.light',
                        },
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                      }}
                    >
                      {link.name}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Contact Info
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Mail sx={{ fontSize: 20, opacity: 0.8 }} />
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      vishubhardwaj46@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ fontSize: 20, opacity: 0.8 }} />
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      +91-7351734476
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      📍
                    </Box>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Gurgaon, HR, India
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              © {new Date().getFullYear()} Vishu Sharma. All rights reserved. Built with Next.js and Material-UI.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            backgroundColor: 'primary.main',
            color: 'white',
            width: 56,
            height: 56,
            zIndex: 1000,
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      )}
    </>
  )
}

export default FooterMUI
