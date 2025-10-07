'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Download,
  Work,
} from '@mui/icons-material'
import { motion, Variants } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useTheme as useCustomTheme } from './ThemeProvider'

const HeroMUI = () => {
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()
  const { mode } = useCustomTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    setMounted(true)
  }, [])

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
      color: 'primary',
    },
    {
      name: 'Email',
      href: 'mailto:vishubhardwaj46@gmail.com',
      icon: Email,
      color: 'secondary',
    },
  ]

  const technologies = [
    'React.js',
    'Next.js',
    '.NET',
    'Oracle',
    'Enterprise Solutions',
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  if (!mounted) {
    return (
      <Box
        id="home"
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          background: mode === 'dark' 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '80px',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: 2, fontWeight: 700 }}>
              Loading...
            </Typography>
          </Box>
        </Container>
      </Box>
    )
  }

  return (
    <Box
      id="home"
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        background: mode === 'dark' 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: mode === 'dark'
            ? `
                radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(192, 38, 211, 0.2) 0%, transparent 50%)
              `
            : `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)
              `,
          zIndex: 0,
        }}
      />
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: 100,
          height: 100,
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: 60,
          height: 60,
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 2,
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.1,
                  }}
                >
                  Vishu Sharma
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  <Typewriter
                    words={[
                      'Full Stack Developer',
                      'React.js Specialist',
                      'Next.js Expert',
                      '.NET Developer',
                      'Enterprise Solutions',
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                  {technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Chip
                        label={tech}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          fontWeight: 500,
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                  }}
                >
                  Passionate Full Stack Developer with 2+ years of experience building scalable 
                  enterprise applications. I specialize in modern web technologies and have delivered 
                  solutions that improved performance by up to 35% and boosted user engagement by 40%.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="#contact"
                      startIcon={<Email />}
                      sx={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        color: '#1f2937',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      href="#projects"
                      startIcon={<Work />}
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                        color: 'white',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        borderWidth: 2,
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0px 8px 25px rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      View My Work
                    </Button>
                  </motion.div>
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {socialLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<link.icon />}
                        sx={{
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderColor: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0px 8px 25px rgba(255, 255, 255, 0.15)',
                          },
                        }}
                      >
                        {link.name}
                      </Button>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Quick Stats
                    </Typography>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOn sx={{ fontSize: 20, opacity: 0.8 }} />
                        <Typography variant="body2">
                          Gurgaon, Haryana, India
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Phone sx={{ fontSize: 20, opacity: 0.8 }} />
                        <Typography variant="body2">
                          +91-7351734476
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Email sx={{ fontSize: 20, opacity: 0.8 }} />
                        <Typography variant="body2">
                          vishubhardwaj46@gmail.com
                        </Typography>
                      </Box>
                    </Stack>
                    <Button
                      variant="outlined"
                      size="small"
                      href="/resume"
                      startIcon={<Download />}
                      sx={{
                        mt: 2,
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        color: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      Download Resume
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default HeroMUI