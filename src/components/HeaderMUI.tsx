'use client'

import { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useTheme as useCustomTheme } from './ThemeProvider'

const HeaderMUI = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()
  const { mode, toggleColorMode } = useCustomTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'AI Features', href: '#ai-features' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = href
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Button
              fullWidth
              onClick={() => handleNavClick(item.href)}
              sx={{ 
                py: 2,
                color: 'text.primary',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                },
              }}
            >
              {item.name}
            </Button>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', py: 2 }}>
            <IconButton onClick={toggleColorMode} sx={{ color: 'text.primary' }}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </ListItem>
      </List>
    </Box>
  )

  if (!mounted) {
    return null
  }

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: scrolled 
              ? (mode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)')
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            boxShadow: scrolled ? (mode === 'dark' ? 3 : 1) : 0,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            borderBottom: scrolled 
              ? (mode === 'dark' ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)')
              : 'none',
          }}
        >
          <Toolbar>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  flexGrow: 1, 
                  fontWeight: 700,
                  background: scrolled 
                    ? (mode === 'dark' 
                        ? 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)'
                        : 'linear-gradient(135deg, #1f2937 0%, #374151 100%)')
                    : 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                Vishu Sharma
              </Typography>
            </motion.div>
            
            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  onClick={toggleColorMode}
                  sx={{ 
                    color: scrolled 
                      ? (mode === 'dark' ? 'white' : 'primary.main')
                      : 'white',
                    mr: 1,
                  }}
                >
                  {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    color: scrolled 
                      ? (mode === 'dark' ? 'white' : 'primary.main')
                      : 'white',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleNavClick(item.href)}
                      sx={{ 
                        color: scrolled 
                          ? (mode === 'dark' ? 'white' : 'primary.main')
                          : 'white',
                        mx: 0.5,
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: scrolled 
                            ? (mode === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)')
                            : 'rgba(255,255,255,0.2)',
                          color: 'white',
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={toggleColorMode}
                    sx={{ 
                      color: scrolled 
                        ? (mode === 'dark' ? 'white' : 'primary.main')
                        : 'white',
                      ml: 1,
                    }}
                  >
                    {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                </motion.div>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: mode === 'dark' 
              ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default HeaderMUI