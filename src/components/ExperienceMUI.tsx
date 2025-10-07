'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
} from '@mui/material'
import {
  Work,
  School,
  Star,
  Code,
} from '@mui/icons-material'
import { motion, Variants } from 'framer-motion'

const ExperienceMUI = () => {
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

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Transport Corporation of India Ltd',
      location: 'India',
      period: 'May 2025 - Present',
      type: 'Current',
      achievements: [
        'Engineered enterprise logistics platforms by migrating legacy .NET modules to React.js/Next.js with ASP.NET APIs, achieving 35% faster load times',
        'Optimized database operations (Oracle & PostgreSQL), reducing query response by 30%',
        'Developed real-time shipment tracking dashboards for 500+ daily shipments, improving business visibility',
        'Partnered with cross-functional teams in Agile sprints, ensuring consistent on-time delivery of client requirements'
      ],
      technologies: ['React.js', 'Next.js', 'ASP.NET', 'Oracle', 'PostgreSQL', 'Agile/Scrum'],
      icon: <Work />,
      color: 'primary',
    },
    {
      title: 'Frontend Developer',
      company: 'Techugo',
      location: 'India',
      period: 'Aug 2023 - May 2025',
      type: 'Previous',
      achievements: [
        'Delivered EdTech learning app with live video, chat, and payments, achieving a 40% rise in engagement among 1K+ users',
        'Enhanced UI performance by 50% through React performance audits and Redux optimization',
        'Integrated Agora SDK (live video) and SkipCash payments securely with backend services',
        'Collaborated with QA, PMs, and backend teams to deliver client-facing solutions under strict deadlines'
      ],
      technologies: ['React.js', 'Redux', 'Agora SDK', 'SkipCash', 'Live Video', 'Payment Integration'],
      icon: <Code />,
      color: 'secondary',
    }
  ]

  const education = [
    {
      degree: 'MCA (Master of Computer Applications)',
      institution: 'Chandigarh University',
      period: '2021 - 2023',
      type: 'Education',
      icon: <School />,
    },
    {
      degree: 'B.Sc. (Computer Science)',
      institution: 'Meerut College',
      period: '2018 - 2021',
      type: 'Education',
      icon: <School />,
    }
  ]

  const certifications = [
    {
      name: 'Meta Front-End Developer',
      issuer: 'Coursera',
      year: '2024',
      type: 'Certification',
      icon: <Star />,
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2024',
      type: 'Certification',
      icon: <Star />,
    },
    {
      name: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      year: '2023',
      type: 'Certification',
      icon: <Star />,
    }
  ]

  if (!mounted) {
    return (
      <Box
        id="experience"
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
    <Box id="experience" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                Experience & Education
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 4,
                  background: 'linear-gradient(90deg, #6366f1, #ec4899)',
                  mx: 'auto',
                  mb: 3,
                  borderRadius: 2,
                }}
              />
              <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                My professional journey in full-stack development
              </Typography>
            </Box>
          </motion.div>

          {/* Experience Timeline */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, mb: 8 }}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
                    border: '1px solid rgba(99, 102, 241, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0px 12px 30px rgba(99, 102, 241, 0.15)',
                    },
                  }}
                >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: exp.type === 'Current' 
                      ? 'linear-gradient(90deg, #10b981, #059669)' 
                      : 'linear-gradient(90deg, #6366f1, #4f46e5)',
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'flex-start' }}>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar sx={{ backgroundColor: exp.color === 'primary' ? 'primary.main' : 'secondary.main' }}>
                          {exp.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {exp.title}
                          </Typography>
                          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 500 }}>
                            {exp.company}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                        <Chip
                          label={exp.period}
                          size="small"
                          sx={{ backgroundColor: 'primary.light', color: 'white' }}
                        />
                        <Chip
                          label={exp.location}
                          size="small"
                          variant="outlined"
                        />
                        <Chip
                          label={exp.type}
                          size="small"
                          color={exp.type === 'Current' ? 'success' : 'default'}
                        />
                      </Stack>

                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Key Achievements:
                      </Typography>
                      <Stack spacing={1.5} sx={{ mb: 3 }}>
                        {exp.achievements.map((achievement, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                backgroundColor: 'primary.main',
                                borderRadius: '50%',
                                mt: 1,
                                flexShrink: 0,
                              }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {achievement}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>

                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Technologies Used:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {exp.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'primary.light',
                              color: 'white',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </Box>

          {/* Education & Certifications */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Education */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Avatar sx={{ backgroundColor: 'primary.main' }}>
                        <School />
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Education
                      </Typography>
                    </Box>
                <Stack spacing={3}>
                  {education.map((edu, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 3,
                        backgroundColor: 'primary.light',
                        borderRadius: 2,
                        color: 'white',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body1" sx={{ opacity: 0.9, mb: 0.5 }}>
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {edu.period}
                      </Typography>
                    </Box>
                  ))}
                  </Stack>
                </CardContent>
              </Card>
              </motion.div>
            </Box>

            {/* Certifications */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Avatar sx={{ backgroundColor: 'secondary.main' }}>
                        <Star />
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Certifications
                      </Typography>
                    </Box>
                <Stack spacing={2}>
                  {certifications.map((cert, index) => (
                    <Card
                      key={index}
                      sx={{
                        backgroundColor: 'secondary.light',
                        color: 'white',
                        p: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {cert.name}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                        {cert.issuer}
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.8 }}>
                        {cert.year}
                      </Typography>
                    </Card>
                  ))}
                  </Stack>
                </CardContent>
              </Card>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ExperienceMUI
