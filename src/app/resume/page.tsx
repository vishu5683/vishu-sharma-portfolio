import { Metadata } from 'next'
import { Box, Typography, Button, Card, CardContent, Stack, Chip, Divider } from '@mui/material'
import { Download, Email, Phone, LocationOn, GitHub, LinkedIn } from '@mui/icons-material'

export const metadata: Metadata = {
  title: 'Resume - Vishu Sharma',
  description: 'Professional resume of Vishu Sharma, Full Stack Developer with 3.5+ years of experience in C#, ASP.NET Core, React, TypeScript and Oracle.',
}

const ResumePage = () => {
  const resumeData = {
    name: 'Vishu Sharma',
    title: 'Full Stack Developer',
    contact: {
      email: 'vishubhardwaj46@gmail.com',
      phone: '+91-9760204915',
      location: 'Gurugram, HR, India',
      github: 'github.com/vishu5683',
      linkedin: 'linkedin.com/in/vishu-s-314661ab',
    },
    summary: 'Full Stack Developer with 3.5+ years building production web applications with C#, ASP.NET Core Web API, React and TypeScript across enterprise logistics and EdTech. Built an AI document-extraction pipeline (AWS Textract + OpenAI) for enterprise shippers, a Yard Management System handling 200–300 vehicles/day, and migrated 150+ legacy ASP.NET WebForms screens to React + ASP.NET Core. Owns features end to end (database, API, UI); strong in REST API design, Clean Architecture, RBAC, Oracle/SQL and third-party integrations.',
    experience: [
      {
        title: 'Full Stack Developer',
        company: 'TCI Group (Transport Corporation of India), Gurugram',
        period: 'May 2025 - Present',
        achievements: [
          'Designed and built an AI document-extraction pipeline using AWS Textract (OCR) and OpenAI GPT-4, replacing a brittle regex parser and making freight-order ingestion format-agnostic for shippers like Siemens and Tata.',
          'Automated the end-to-end order workflow (email PDF → Textract OCR → GPT-4 structuring & validation → Oracle insert with dual status-flag trigger), eliminating daily manual re-entry of customer orders.',
          'Built a Yard Management System processing 200–300 inbound vehicles/day across dedicated Tata, Hyundai and MG yards, automating model-wise block/slot allocation against each OEM\'s layout plan.',
          'Integrated gate-level hardware (handheld OCR barcode scanners, thermal-printer label generation) and delivered inbound/outbound, loading/unloading, stock, survey and live operations-dashboard modules.',
          'Migrated 150+ legacy ASP.NET WebForms screens to React + ASP.NET Core + Oracle, writing PL/SQL packages, Clean Architecture API layers (Repository, Unit of Work, AutoMapper, Dapper) and role-aware React UIs.',
          'Implemented 5-tier hierarchical RBAC (Corporate down to Branch level) so every user sees only the data and actions permitted for their level, enforced across all modules.',
        ],
      },
      {
        title: 'Associate Software Developer',
        company: 'Techugo, Noida (Intern Feb 2023 - Aug 2023, then full-time)',
        period: 'Feb 2023 - Apr 2025',
        achievements: [
          'Core developer of Taleem, a Qatar-focused EdTech platform for Students, Tutors and Parents, built from scratch and grown to 1,000+ paid subscriptions.',
          'Integrated Agora Video SDK for real-time live classes supporting 100 concurrent users per 1-hour session.',
          'Built the authentication and billing modules — Firebase Authentication, Google OAuth, role-based access, SkipCash payment gateway for subscriptions and InfoBip SMS/push notifications.',
          'Shipped REST APIs (ASP.NET Core + Node.js) for 4+ client products across fintech and SaaS, and converted Figma designs into responsive React components.',
          'As an intern, built React UI components and REST integrations for an e-commerce client release; wrote unit tests and fixed production bugs.',
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
      'Angular (Infosys Springboard)',
      'MongoDB Certified Developer | 2024',
      'Meta Front-End Developer | 2024',
    ],
    skills: {
      frontend: ['React.js', 'Angular', 'Redux', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material UI', 'Responsive Design', 'Figma-to-Code'],
      backend: ['C#', 'ASP.NET Core Web API', '.NET Core', 'Entity Framework Core', 'LINQ', 'Dapper', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets'],
      database: ['Oracle', 'PL/SQL', 'SQL Server', 'PostgreSQL (pgvector)', 'MongoDB', 'Firebase Realtime DB', 'Stored Procedures'],
      tools: ['Git', 'CI/CD', 'Swagger/OpenAPI', 'Postman', 'Agile/Scrum'],
      testing: ['Unit Testing', 'pytest'],
      cloud: ['AWS (Lambda, S3, Textract)', 'Docker', 'OpenAI API', 'LLM Integration', 'RAG', 'Embeddings'],
    },
    achievements: [
      'Built an AI document-extraction pipeline (AWS Textract + OpenAI GPT-4) that removed daily manual order re-entry.',
      'Migrated 150+ legacy ASP.NET WebForms screens to React + ASP.NET Core + Oracle.',
      'Grew the Taleem EdTech platform to 1,000+ paid subscriptions as a core developer.',
      'Solved 250+ LeetCode problems in Data Structures & Algorithms.',
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
      addressLocality: 'Gurugram',
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
        jobTitle: 'Full Stack Developer',
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
