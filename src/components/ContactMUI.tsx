'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  useTheme,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material'
import {
  Email,
  Phone,
  LocationOn,
  Send,
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
} from '@mui/icons-material'
import { motion, Variants } from 'framer-motion'

const ContactMUI = () => {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'warning' | 'info',
  })
  const theme = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error',
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error',
      })
      return
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I&apos;ll get back to you soon.',
        severity: 'success',
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error',
      })
    }
  }

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'vishubhardwaj46@gmail.com',
      href: 'mailto:vishubhardwaj46@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91-7351734476',
      href: 'tel:+917351734476',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Gurgaon, Haryana, India',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: <GitHub />,
      name: 'GitHub',
      href: 'https://github.com/vishu5683',
      color: '#333',
    },
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/vishu-s-314661ab',
      color: '#0077b5',
    },
    {
      icon: <Twitter />,
      name: 'Twitter',
      href: '#',
      color: '#1da1f2',
    },
    {
      icon: <Instagram />,
      name: 'Instagram',
      href: '#',
      color: '#e4405f',
    },
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
        id="contact"
        sx={{
          py: 8,
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>
            Loading...
          </Typography>
        </Container>
      </Box>
    )
  }

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
          background: theme.palette.mode === 'dark'
            ? `
                radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
              `
            : `
                radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
              `,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Let&apos;s discuss your next project or just say hello!
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
            {/* Contact Information */}
            <Box sx={{ flex: { xs: 1, md: '0 0 33.333%' } }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(30, 41, 59, 0.5)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(99, 102, 241, 0.2)'
                      : '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                      Contact Information
                    </Typography>
                    <Stack spacing={3}>
                      {contactInfo.map((info) => (
                        <motion.div
                          key={info.title}
                          whileHover={{ scale: 1.02, x: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: 2,
                              borderRadius: 2,
                              backgroundColor: 'rgba(99, 102, 241, 0.05)',
                              border: '1px solid rgba(99, 102, 241, 0.1)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                borderColor: 'rgba(99, 102, 241, 0.2)',
                              },
                            }}
                            onClick={() => info.href !== '#' && window.open(info.href)}
                          >
                            <Box
                              sx={{
                                p: 1,
                                borderRadius: 2,
                                backgroundColor: 'primary.main',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                {info.title}
                              </Typography>
                              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {info.value}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>

                    {/* Social Links */}
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Follow Me
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        {socialLinks.map((social) => (
                          <motion.div
                            key={social.name}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconButton
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                backgroundColor: `${social.color}15`,
                                color: social.color,
                                '&:hover': {
                                  backgroundColor: `${social.color}25`,
                                  transform: 'translateY(-2px)',
                                },
                              }}
                            >
                              {social.icon}
                            </IconButton>
                          </motion.div>
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            {/* Contact Form */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(30, 41, 59, 0.5)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(99, 102, 241, 0.2)'
                      : '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          backgroundColor: 'primary.main',
                          color: 'white',
                          mr: 2,
                        }}
                      >
                        <Send />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Send Message
                      </Typography>
                    </Box>

                    <form onSubmit={handleSubmit}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                          <Box sx={{ flex: 1 }}>
                            <TextField
                              fullWidth
                              label="Name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              variant="outlined"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 2,
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'primary.main',
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'primary.main',
                                    borderWidth: 2,
                                  },
                                },
                              }}
                          />
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <TextField
                              fullWidth
                              label="Email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              variant="outlined"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 2,
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'primary.main',
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'primary.main',
                                    borderWidth: 2,
                                  },
                                },
                              }}
                          />
                          </Box>
                        </Box>
                        <Box>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'primary.main',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'primary.main',
                                  borderWidth: 2,
                                },
                              },
                            }}
                          />
                        </Box>
                        <Box>
                          <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            multiline
                            rows={6}
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'primary.main',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'primary.main',
                                  borderWidth: 2,
                                },
                              },
                            }}
                          />
                        </Box>
                        <Box>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              startIcon={<Send />}
                              sx={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 600,
                                borderRadius: 2,
                                boxShadow: '0px 8px 25px rgba(99, 102, 241, 0.3)',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #4f46e5 0%, #db2777 100%)',
                                  boxShadow: '0px 12px 35px rgba(99, 102, 241, 0.4)',
                                  transform: 'translateY(-2px)',
                                },
                              }}
                            >
                              Send Message
                            </Button>
                          </motion.div>
                        </Box>
                      </Box>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default ContactMUI