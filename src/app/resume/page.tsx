import { Metadata } from 'next'
import { Box, Typography, Button, Card, CardContent, Stack, Chip, Divider } from '@mui/material'
import { Download, Email, Phone, LocationOn, GitHub, LinkedIn } from '@mui/icons-material'

export const metadata: Metadata = {
  title: 'Resume - Vishu Sharma',
  description: 'Professional resume of Vishu Sharma, Full Stack Developer with 2+ years of experience in React.js, Next.js, .NET, and Enterprise Solutions.',
}

const ResumePage = () => {
  const resumeData = {
    name: 'Vishu Sharma',
    title: 'Full Stack Developer',
    contact: {
      email: 'vishubhardwaj46@gmail.com',
      phone: '+91-7351734476, +91-9760204915',
      location: 'Gurgaon, HR, India',
      github: 'github.com/vishu5683',
      linkedin: 'linkedin.com/in/vishu-s-314661ab',
    },
    summary: 'Full Stack Developer with 2+ years of experience designing and delivering enterprise-grade web applications using React.js, Next.js, ASP.NET, Node.js, and Oracle/PostgreSQL. Proven success in building scalable business systems, client-facing platforms, and digital solutions that improved performance by up to 35% and boosted user engagement by 40%.',
    experience: [
      {
        title: 'Software Development Engineer',
        company: 'Transport Corporation of India Ltd',
        period: 'May 2025 - Present',
        achievements: [
          'Engineered enterprise logistics platforms by migrating legacy .NET modules to React.js/Next.js with ASP.NET APIs, achieving 35% faster load times.',
          'Optimized database operations (Oracle & PostgreSQL), reducing query response by 30%.',
          'Developed real-time shipment tracking dashboards for 500+ daily shipments, improving business visibility.',
          'Partnered with cross-functional teams in Agile sprints, ensuring consistent on-time delivery of client requirements.',
        ],
      },
      {
        title: 'Frontend Developer',
        company: 'Techugo',
        period: 'Aug 2023 - May 2025',
        achievements: [
          'Delivered EdTech learning app with live video, chat, and payments, achieving a 40% rise in engagement among 1K+ users.',
          'Enhanced UI performance by 50% through React performance audits and Redux optimization.',
          'Integrated Agora SDK (live video) and SkipCash payments securely with backend services.',
          'Collaborated with QA, PMs, and backend teams to deliver client-facing solutions under strict deadlines.',
        ],
      },
    ],
    education: [
      {
        degree: 'MCA (Master of Computer Applications)',
        institution: 'Chandigarh University',
        period: '2021 - 2023',
      },
      {
        degree: 'B.Sc. (Computer Science)',
        institution: 'Meerut College',
        period: '2018 - 2021',
      },
    ],
    certifications: [
      'Meta Front-End Developer (Coursera) | 2024',
      'Responsive Web Design (freeCodeCamp) | 2024',
      'JavaScript Algorithms & Data Structures (freeCodeCamp) | 2023',
    ],
    skills: {
      frontend: ['React.js', 'Next.js', 'Redux Toolkit', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI'],
      backend: ['ASP.NET', 'Node.js', 'Express.js', 'REST APIs', 'C#', 'Authentication (JWT/OAuth)'],
      database: ['Oracle', 'PostgreSQL', 'Prisma'],
      tools: ['Git', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Vite', 'Agile/Scrum'],
      testing: ['Jest (Unit Testing)', 'Performance Audits'],
      cloud: ['AWS (basic)', 'Azure (basic)'],
    },
    achievements: [
      'Improved platform performance by 35% by modernizing enterprise applications.',
      'Increased user engagement by 40% on EdTech platform with scalable full stack features.',
      'Reduced HR operations workload by 30% through dashboard automation.',
      'Delivered enterprise-grade digital solutions in Agile teams, ensuring client satisfaction and timely delivery.',
    ],
  }

  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resumeData.name,
    jobTitle: resumeData.title,
    email: resumeData.contact.email,
    telephone: resumeData.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurgaon',
      addressRegion: 'HR',
      addressCountry: 'IN',
    },
    url: [
      `https://github.com/${resumeData.contact.github.split('/').pop()}`,
      `https://linkedin.com/in/${resumeData.contact.linkedin.split('/').pop()}`,
    ],
    description: resumeData.summary,
    knowsAbout: [
      ...resumeData.skills.frontend,
      ...resumeData.skills.backend,
      ...resumeData.skills.database,
      ...resumeData.skills.tools,
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Chandigarh University',
        description: 'MCA (Master of Computer Applications)',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Meerut College',
        description: 'B.Sc. (Computer Science)',
      },
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Transport Corporation of India Ltd',
        jobTitle: 'Software Development Engineer',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<Download />}
            href="/resume-ats.pdf"
            download
            sx={{ mb: 3, px: 4, py: 1.5, borderRadius: 2 }}
          >
            Download ATS Resume (PDF)
          </Button>
        </Box>

        <Card sx={{ mb: 4, borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}>
              {resumeData.name}
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, color: 'text.secondary' }}>
              {resumeData.title}
            </Typography>
            
            <Stack direction="row" spacing={4} sx={{ mb: 3, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email fontSize="small" />
                <Typography variant="body2">{resumeData.contact.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone fontSize="small" />
                <Typography variant="body2">{resumeData.contact.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">{resumeData.contact.location}</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Button
                startIcon={<GitHub />}
                href={`https://${resumeData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
              >
                GitHub
              </Button>
              <Button
                startIcon={<LinkedIn />}
                href={`https://${resumeData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
              >
                LinkedIn
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Professional Summary
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {resumeData.summary}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Experience
            </Typography>
            {resumeData.experience.map((exp, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
                  {exp.company} | {exp.period}
                </Typography>
                <ul>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {achievement}
                      </Typography>
                    </li>
                  ))}
                </ul>
                {index < resumeData.experience.length - 1 && <Divider sx={{ mt: 2 }} />}
              </Box>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Skills
            </Typography>
            <Stack spacing={3}>
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Frontend Development
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {resumeData.skills.frontend.map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Backend Development
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {resumeData.skills.backend.map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Database & Tools
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {[...resumeData.skills.database, ...resumeData.skills.tools].map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Education
            </Typography>
            {resumeData.education.map((edu, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  {edu.institution} | {edu.period}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Certifications
            </Typography>
            <ul>
              {resumeData.certifications.map((cert, index) => (
                <li key={index}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {cert}
                  </Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Key Achievements
            </Typography>
            <ul>
              {resumeData.achievements.map((achievement, index) => (
                <li key={index}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {achievement}
                  </Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default ResumePage
