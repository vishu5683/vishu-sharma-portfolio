'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  Code,
  Storage,
  Cloud,
  Security,
  Speed,
  BugReport,
  Web,
  PhoneAndroid,
  AccountTree,
  Science,
  Computer,
} from '@mui/icons-material'
import { motion, Variants } from 'framer-motion'
import SkillsRadar from './SkillsRadar'

const SkillsMUI = () => {
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Web />,
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI'],
      color: '#6366f1',
    },
    {
      title: 'Backend Development',
      icon: <Computer />,
      skills: ['ASP.NET', 'Node.js', 'Express.js', 'C#', 'REST APIs', 'GraphQL'],
      color: '#ec4899',
    },
    {
      title: 'Database & Storage',
      icon: <Storage />,
      skills: ['Oracle', 'PostgreSQL', 'MongoDB', 'Prisma', 'SQL', 'Database Design'],
      color: '#10b981',
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud />,
      skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Jenkins'],
      color: '#f59e0b',
    },
    {
      title: 'Testing & Quality',
      icon: <Science />,
      skills: ['Jest', 'Unit Testing', 'Performance Testing', 'Code Quality'],
      color: '#8b5cf6',
    },
    {
      title: 'Mobile & Tools',
      icon: <PhoneAndroid />,
      skills: ['React Native', 'Git', 'Agile/Scrum', 'Figma', 'VS Code'],
      color: '#06b6d4',
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
        id="skills"
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
      id="skills"
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
              Technical Skills
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
              A comprehensive overview of my technical expertise across different domains
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Skills Radar Chart */}
            <Grid item xs={12} lg={6}>
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
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                      Skill Proficiency
                    </Typography>
                    <SkillsRadar />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Skill Categories */}
            <Grid item xs={12} lg={6}>
              <Grid container spacing={2}>
                {skillCategories.map((category, index) => (
                  <Grid item xs={12} sm={6} key={category.title}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(30, 41, 59, 0.5)'
                            : 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(20px)',
                          border: `1px solid ${category.color}20`,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            border: `1px solid ${category.color}40`,
                            boxShadow: `0px 8px 25px ${category.color}20`,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box
                              sx={{
                                p: 1,
                                borderRadius: 2,
                                backgroundColor: `${category.color}20`,
                                color: category.color,
                                mr: 2,
                              }}
                            >
                              {category.icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {category.title}
                            </Typography>
                          </Box>
                          <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
                            {category.skills.map((skill) => (
                              <Chip
                                key={skill}
                                label={skill}
                                size="small"
                                sx={{
                                  backgroundColor: `${category.color}15`,
                                  color: category.color,
                                  fontWeight: 500,
                                  '&:hover': {
                                    backgroundColor: `${category.color}25`,
                                  },
                                }}
                              />
                            ))}
                          </Stack>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {/* Key Achievements */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 600 }}>
                Key Achievements
              </Typography>
              <Grid container spacing={3}>
                {[
                  { metric: '35%', label: 'Performance Improvement', icon: <Speed /> },
                  { metric: '40%', label: 'User Engagement Boost', icon: <BugReport /> },
                  { metric: '30%', label: 'Manual Effort Reduction', icon: <AccountTree /> },
                  { metric: '2+', label: 'Years Experience', icon: <Security /> },
                ].map((achievement, index) => (
                  <Grid item xs={12} sm={6} md={3} key={achievement.label}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        sx={{
                          textAlign: 'center',
                          p: 3,
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(30, 41, 59, 0.5)'
                            : 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(20px)',
                          border: theme.palette.mode === 'dark'
                            ? '1px solid rgba(99, 102, 241, 0.2)'
                            : '1px solid rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 2,
                            color: 'primary.main',
                          }}
                        >
                          {achievement.icon}
                        </Box>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 1,
                          }}
                        >
                          {achievement.metric}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {achievement.label}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default SkillsMUI