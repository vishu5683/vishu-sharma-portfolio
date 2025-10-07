'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Avatar,
} from '@mui/material'
import {
  Code,
  Storage,
  Cloud,
  TrendingUp,
  People,
  Security,
} from '@mui/icons-material'
import { motion, Variants } from 'framer-motion'
import CountUp from 'react-countup'

const AboutMUI = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const stats = [
    { icon: TrendingUp, label: 'Performance Improvement', value: '35%', description: 'Faster load times' },
    { icon: People, label: 'User Engagement', value: '40%', description: 'Increased engagement' },
    { icon: Storage, label: 'Query Optimization', value: '30%', description: 'Faster database queries' },
    { icon: Security, label: 'Manual Effort Reduction', value: '30%', description: 'HR operations automation' },
  ]

  const achievements = [
    'Certified Meta Front-End Developer',
    'Responsive Web Design Certification',
    'JavaScript Algorithms & Data Structures',
    '2+ Years of Professional Experience',
    'Enterprise-Grade Application Development',
    'Agile/Scrum Methodology Expertise',
  ]

  const coreValues = [
    { icon: Code, text: 'Clean, maintainable code' },
    { icon: Storage, text: 'Scalable architecture' },
    { icon: Cloud, text: 'Modern cloud solutions' },
    { icon: People, text: 'User-centric design' },
  ]

  if (!mounted) {
    return (
      <Box
        id="about"
        sx={{
          py: 8,
          backgroundColor: 'background.default',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 4, fontWeight: 700 }}>
            Loading...
          </Typography>
        </Container>
      </Box>
    )
  }

  return (
    <Box id="about" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                About Me
              </Typography>
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  background: 'linear-gradient(90deg, #6366f1, #ec4899)',
                  mx: 'auto',
                  mb: 3,
                  borderRadius: 2,
                }}
              />
              <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                Passionate about creating digital solutions that make a real impact
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
            {/* Left Column - Story */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                      My Journey
                    </Typography>
                <Stack spacing={3}>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    I&apos;m a passionate Full Stack Developer with 2+ years of experience designing and delivering 
                    enterprise-grade web applications. My journey began with a strong foundation in Computer Science, 
                    earning both B.Sc. and MCA degrees, which provided me with deep technical knowledge.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Currently working as a Software Development Engineer at Transport Corporation of India Ltd, 
                    I&apos;ve successfully migrated legacy .NET modules to modern React.js/Next.js applications, 
                    achieving 35% faster load times and significantly improving user experience.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    My expertise spans the full technology stack - from frontend frameworks like React.js and Next.js 
                    to backend technologies including ASP.NET, Node.js, and database management with Oracle and PostgreSQL. 
                    I&apos;m also certified as a Meta Front-End Developer and have completed multiple specialized courses.
                  </Typography>
                </Stack>

                {/* Achievements */}
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Key Achievements
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {achievements.map((achievement, index) => (
                      <Box key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              backgroundColor: 'primary.main',
                              borderRadius: '50%',
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {achievement}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            {/* Right Column - Stats & Skills */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Stack spacing={4}>
                  {/* Performance Stats */}
                  <Card>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                        Impact Metrics
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                        {stats.map((stat, index) => (
                          <Box key={index} sx={{ flex: 1 }}>
                            <motion.div
                              whileHover={{ scale: 1.05, y: -4 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Card
                                sx={{
                                  backgroundColor: 'primary.light',
                                  color: 'white',
                                  textAlign: 'center',
                                  p: 2,
                                  height: '100%',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    boxShadow: '0px 8px 25px rgba(99, 102, 241, 0.3)',
                                  },
                                }}
                              >
                                <Avatar sx={{ backgroundColor: 'white', color: 'primary.main', mx: 'auto', mb: 1 }}>
                                  <stat.icon />
                                </Avatar>
                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                                  <CountUp end={parseInt(stat.value)} duration={2.5} enableScrollSpy suffix="%" />
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                  {stat.label}
                                </Typography>
                                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                                  {stat.description}
                                </Typography>
                              </Card>
                            </motion.div>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>

                  {/* Core Values */}
                  <Card>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                        Core Values
                      </Typography>
                      <Stack spacing={2}>
                        {coreValues.map((value, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.02, x: 8 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Avatar sx={{ backgroundColor: 'primary.main', width: 40, height: 40 }}>
                                <value.icon />
                              </Avatar>
                              <Typography variant="body1" color="text.secondary">
                                {value.text}
                              </Typography>
                            </Box>
                          </motion.div>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default AboutMUI
