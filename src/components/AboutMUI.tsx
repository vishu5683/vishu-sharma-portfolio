'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
  useTheme,
} from '@mui/material'
import {
  Code,
  Storage,
  Cloud,
  TrendingUp,
  People,
  Security,
} from '@mui/icons-material'

const AboutMUI = () => {
  const theme = useTheme()

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

  return (
    <Box id="about" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
            About Me
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: 'primary.main',
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            Passionate about creating digital solutions that make a real impact
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Column - Story */}
          <Grid item xs={12} lg={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  My Journey
                </Typography>
                <Stack spacing={3}>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    I'm a passionate Full Stack Developer with 2+ years of experience designing and delivering 
                    enterprise-grade web applications. My journey began with a strong foundation in Computer Science, 
                    earning both B.Sc. and MCA degrees, which provided me with deep technical knowledge.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Currently working as a Software Development Engineer at Transport Corporation of India Ltd, 
                    I've successfully migrated legacy .NET modules to modern React.js/Next.js applications, 
                    achieving 35% faster load times and significantly improving user experience.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    My expertise spans the full technology stack - from frontend frameworks like React.js and Next.js 
                    to backend technologies including ASP.NET, Node.js, and database management with Oracle and PostgreSQL. 
                    I'm also certified as a Meta Front-End Developer and have completed multiple specialized courses.
                  </Typography>
                </Stack>

                {/* Achievements */}
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Key Achievements
                  </Typography>
                  <Grid container spacing={1}>
                    {achievements.map((achievement, index) => (
                      <Grid item xs={12} sm={6} key={index}>
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
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Stats & Skills */}
          <Grid item xs={12} lg={6}>
            <Stack spacing={4}>
              {/* Performance Stats */}
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    Impact Metrics
                  </Typography>
                  <Grid container spacing={2}>
                    {stats.map((stat, index) => (
                      <Grid item xs={6} key={index}>
                        <Card
                          sx={{
                            backgroundColor: 'primary.light',
                            color: 'white',
                            textAlign: 'center',
                            p: 2,
                            height: '100%',
                          }}
                        >
                          <Avatar sx={{ backgroundColor: 'white', color: 'primary.main', mx: 'auto', mb: 1 }}>
                            <stat.icon />
                          </Avatar>
                          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                            {stat.label}
                          </Typography>
                          <Typography variant="caption" sx={{ opacity: 0.8 }}>
                            {stat.description}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
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
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ backgroundColor: 'primary.main', width: 40, height: 40 }}>
                          <value.icon />
                        </Avatar>
                        <Typography variant="body1" color="text.secondary">
                          {value.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutMUI
