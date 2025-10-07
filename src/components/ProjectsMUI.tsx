'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  useTheme,
} from '@mui/material'
import {
  GitHub,
  OpenInNew,
  TrendingUp,
  People,
} from '@mui/icons-material'
import { motion, Variants } from 'framer-motion'
import ProjectMetricsBar from './ProjectMetricsBar'

const ProjectsMUI = () => {
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Enterprise Logistics Platform',
      description: 'Modernized business systems using React.js, Next.js, and ASP.NET APIs, delivering 35% faster performance and improved scalability.',
      technologies: ['React.js', 'Next.js', 'ASP.NET', 'Oracle', 'PostgreSQL'],
      metrics: {
        performance: 35,
        users: 500,
        improvement: 'Load Time',
      },
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/vishu5683',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Built real-time reporting platform with React, Chart.js, Zustand, and ASP.NET APIs, reducing decision-making time by 25%.',
      technologies: ['React.js', 'Chart.js', 'Zustand', 'ASP.NET', 'Oracle'],
      metrics: {
        performance: 25,
        users: 200,
        improvement: 'Decision Time',
      },
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/vishu5683',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'EdTech Learning Platform',
      description: 'Delivered scalable learning platform (1000+ users) with live video and payment integrations, boosting user engagement by 40%.',
      technologies: ['React.js', 'Node.js', 'Agora SDK', 'SkipCash', 'MongoDB'],
      metrics: {
        performance: 40,
        users: 1000,
        improvement: 'User Engagement',
      },
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/vishu5683',
      liveUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'HRMS Dashboard',
      description: 'Developed payroll & attendance analytics system using React, Redux Toolkit, and Tailwind, reducing HR manual effort by 30%.',
      technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      metrics: {
        performance: 30,
        users: 150,
        improvement: 'Manual Effort',
      },
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/vishu5683',
      liveUrl: '#',
      featured: false,
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
        id="projects"
        sx={{
          py: 8,
          backgroundColor: 'background.paper',
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
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
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
                radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
              `
            : `
                radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
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
              Featured Projects
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
              Showcasing my best work with measurable impact and modern technologies
            </Typography>
          </motion.div>

          {/* Project Metrics Chart */}
          <motion.div variants={itemVariants}>
            <Card
              sx={{
                mb: 6,
                background: theme.palette.mode === 'dark'
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: theme.palette.mode === 'dark'
                  ? '1px solid rgba(99, 102, 241, 0.2)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Project Impact Metrics
                </Typography>
                <ProjectMetricsBar />
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects Grid */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, flexWrap: 'wrap' }}>
            {projects.map((project) => (
              <Box key={project.id} sx={{ flex: { xs: 1, md: '0 0 calc(50% - 16px)' } }}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(30, 41, 59, 0.5)'
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: project.featured
                        ? (theme.palette.mode === 'dark'
                            ? '2px solid rgba(99, 102, 241, 0.4)'
                            : '2px solid rgba(99, 102, 241, 0.2)')
                        : (theme.palette.mode === 'dark'
                            ? '1px solid rgba(99, 102, 241, 0.2)'
                            : '1px solid rgba(0, 0, 0, 0.1)'),
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        border: project.featured
                          ? (theme.palette.mode === 'dark'
                              ? '2px solid rgba(99, 102, 241, 0.6)'
                              : '2px solid rgba(99, 102, 241, 0.4)')
                          : (theme.palette.mode === 'dark'
                              ? '1px solid rgba(99, 102, 241, 0.4)'
                              : '1px solid rgba(99, 102, 241, 0.2)'),
                        boxShadow: project.featured
                          ? '0px 20px 40px rgba(99, 102, 241, 0.2)'
                          : '0px 15px 30px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    {project.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -1,
                          left: 20,
                          backgroundColor: 'primary.main',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: '0 0 8px 8px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          zIndex: 1,
                        }}
                      >
                        Featured
                      </Box>
                    )}

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.6 }}
                      >
                        {project.description}
                      </Typography>

                      {/* Metrics */}
                      <Box sx={{ mb: 3 }}>
                        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TrendingUp sx={{ fontSize: 20, color: 'primary.main' }} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {project.metrics.performance}% {project.metrics.improvement}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <People sx={{ fontSize: 20, color: 'secondary.main' }} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {project.metrics.users}+ Users
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>

                      {/* Technologies */}
                      <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'primary.light',
                              color: 'white',
                              fontWeight: 500,
                              '&:hover': {
                                backgroundColor: 'primary.main',
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>

                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        variant="outlined"
                        startIcon={<GitHub />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            borderColor: 'primary.dark',
                            backgroundColor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<OpenInNew />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #4f46e5 0%, #db2777 100%)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ProjectsMUI