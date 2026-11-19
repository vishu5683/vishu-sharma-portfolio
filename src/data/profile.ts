export const profile = {
  name: 'Vishu Sharma',
  role: 'Full Stack Developer',
  tagline: 'React · .NET Core · Angular · Oracle',
  location: 'Gurugram, India',
  email: 'vishubhardwaj46@gmail.com',
  phone: '+91-9760204915',
  github: 'https://github.com/vishu5683',
  linkedin: 'https://linkedin.com/in/vishu-s-314661ab',
  leetcode: 'https://leetcode.com/vishu5683',
  resume: '/resume-ats.pdf',
  intro:
    'I build production web apps end to end, from Oracle and ASP.NET Core APIs to React front ends. 3.5+ years across enterprise logistics and EdTech, most recently AI document extraction and a Yard Management System at TCI Group.',
  summary:
    'Full Stack Developer with 3.5+ years building production web applications with C#, ASP.NET Core Web API, React and TypeScript across enterprise logistics and EdTech. I own features end to end (database, API, UI) and I am strong in REST API design, Clean Architecture, RBAC, Oracle/SQL and third-party integrations.',
}

export const stats = [
  { value: '3.5+', label: 'Years experience' },
  { value: '150+', label: 'Legacy screens migrated' },
  { value: '200–300', label: 'Vehicles / day through YMS' },
  { value: '1,000+', label: 'Paid subscriptions (Taleem)' },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'TCI Group (Transport Corporation of India)',
    location: 'Gurugram, India',
    period: 'May 2025 – Present',
    points: [
      'Designed and built an AI document-extraction pipeline using AWS Textract (OCR) and OpenAI GPT-4, replacing a brittle regex parser and making freight-order ingestion format-agnostic for shippers like Siemens and Tata.',
      'Automated the end-to-end order workflow (email PDF → Textract OCR → GPT-4 structuring & validation → Oracle insert with dual status-flag trigger), eliminating daily manual re-entry of customer orders.',
      "Built a Yard Management System processing 200–300 inbound vehicles/day across dedicated Tata, Hyundai and MG yards, automating model-wise block/slot allocation against each OEM's layout plan.",
      'Integrated gate-level hardware (handheld OCR barcode scanners, thermal-printer label generation) and delivered inbound/outbound, loading/unloading, stock, survey and live operations-dashboard modules.',
      'Migrated 150+ legacy ASP.NET WebForms screens to React + ASP.NET Core + Oracle, writing PL/SQL packages, Clean Architecture API layers (Repository, Unit of Work, AutoMapper, Dapper) and role-aware React UIs.',
      'Implemented 5-tier hierarchical RBAC (Corporate down to Branch level) so every user sees only the data and actions permitted for their level, enforced across all modules.',
    ],
    stack: ['C#', 'ASP.NET Core', 'React', 'Oracle PL/SQL', 'AWS Textract', 'OpenAI GPT-4', 'Dapper'],
  },
  {
    role: 'Associate Software Developer',
    company: 'Techugo',
    location: 'Noida, India',
    period: 'Feb 2023 – Apr 2025',
    note: 'Software Engineer Intern Feb 2023 – Aug 2023, then full-time',
    points: [
      'Core developer of Taleem, a Qatar-focused EdTech platform for Students, Tutors and Parents, built from scratch and grown to 1,000+ paid subscriptions.',
      'Integrated Agora Video SDK for real-time live classes supporting 100 concurrent users per 1-hour session.',
      'Built the authentication and billing modules: Firebase Authentication, Google OAuth, role-based access, SkipCash payment gateway for subscriptions and InfoBip SMS/push notifications.',
      'Shipped REST APIs (ASP.NET Core + Node.js) for 4+ client products across fintech and SaaS, and converted Figma designs into responsive React components.',
      'As an intern, built React UI components and REST integrations for an e-commerce client release; wrote unit tests and fixed production bugs.',
    ],
    stack: ['React', 'ASP.NET Core', 'Node.js', 'Agora SDK', 'Firebase', 'SkipCash'],
  },
]

export const projects = [
  {
    title: 'AI Document Extraction Pipeline',
    kind: 'TCI Group · Production',
    description:
      'Email PDF → AWS Textract OCR → GPT-4 structuring and validation → Oracle insert. Replaced a brittle regex parser so freight orders from any shipper format load without manual re-entry.',
    highlights: ['Format-agnostic ingestion', 'Zero daily re-entry'],
    stack: ['AWS Textract', 'OpenAI GPT-4', 'C#', 'ASP.NET Core', 'Oracle'],
  },
  {
    title: 'Yard Management System',
    kind: 'TCI Group · Production',
    description:
      'Inbound/outbound, loading/unloading, stock, survey and live operations dashboards for dedicated Tata, Hyundai and MG yards, with model-wise slot allocation and gate hardware (OCR scanners, thermal labels).',
    highlights: ['200–300 vehicles/day', '3 OEM yards'],
    stack: ['React', 'ASP.NET Core', 'Oracle', 'Barcode/OCR', 'Thermal printing'],
  },
  {
    title: 'RAG Document Assistant',
    kind: 'Side project · Open source',
    description:
      'Chunking, embeddings and pgvector (HNSW) similarity search feed an LLM; answers stream to a React + TypeScript chat UI with source citations. Provider-agnostic client (OpenAI, Gemini, Ollama).',
    highlights: ['26 pytest tests', 'Docker + GitHub Actions CI'],
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL + pgvector'],
    link: 'https://github.com/vishu5683/rag-document-assistant',
  },
  {
    title: 'NSE Stocks Pro',
    kind: 'Side project · Live',
    description:
      'NSE F&O stock screener and market dashboard: indices, breadth, sector heatmap, 259-stock screener with presets and ATR-based trade ideas, Excel/PDF reports, and live Upstox prices behind a server-side token. Python pipeline computes RSI, EMA, MACD, ADX and ATR.',
    highlights: ['259 F&O stocks', 'Live prices every 5s'],
    stack: ['React', 'Vite', 'Python', 'Vercel Functions', 'Upstox API', 'GitHub Actions'],
    link: 'https://nsestock-five.vercel.app',
  },
  {
    title: 'Legacy ERP Migration',
    kind: 'TCI Group · Production',
    description:
      'ASP.NET WebForms screens rebuilt as React + ASP.NET Core + Oracle, with PL/SQL packages, Clean Architecture API layers and role-aware UIs for five levels of users.',
    highlights: ['150+ screens', '5-tier RBAC'],
    stack: ['React', 'ASP.NET Core', 'Dapper', 'AutoMapper', 'PL/SQL'],
  },
  {
    title: 'Taleem EdTech Platform',
    kind: 'Techugo · Production',
    description:
      'Learning platform for Students, Tutors and Parents in Qatar: live classes on Agora, Firebase and Google sign-in, SkipCash subscriptions and InfoBip notifications.',
    highlights: ['1,000+ paid subscriptions', '100 users per live class'],
    stack: ['React', 'Node.js', 'Agora SDK', 'Firebase', 'SkipCash'],
  },
]

export const skills = [
  { group: 'Languages', items: ['C#', 'TypeScript', 'JavaScript (ES6+)', 'SQL', 'PL/SQL', 'Python'] },
  { group: 'Frontend', items: ['React.js', 'Angular', 'Redux', 'HTML5', 'CSS3', 'Material UI', 'Responsive Design', 'Figma-to-Code'] },
  { group: 'Backend', items: ['ASP.NET Core Web API', '.NET Core', 'Entity Framework Core', 'LINQ', 'Dapper', 'Node.js', 'Express.js', 'FastAPI', 'WebSockets'] },
  { group: 'Databases', items: ['Oracle', 'SQL Server', 'PostgreSQL (pgvector)', 'MongoDB', 'Firebase Realtime DB', 'Stored Procedures'] },
  { group: 'Cloud & AI', items: ['AWS Lambda', 'AWS S3', 'AWS Textract', 'Docker', 'OpenAI API', 'LLM Integration', 'RAG', 'Embeddings'] },
  { group: 'Architecture', items: ['Clean Architecture', 'SOLID', 'Repository & Unit of Work', 'AutoMapper', 'Dependency Injection', 'JWT', 'OAuth 2.0', 'RBAC'] },
  { group: 'Tools', items: ['Git', 'CI/CD', 'Swagger/OpenAPI', 'Postman', 'Unit Testing', 'Agile/Scrum'] },
]

export const education = {
  degree: 'Master of Computer Applications (MCA)',
  school: 'Chandigarh University (NAAC A+), Mohali',
  period: '2021 – 2023',
}

export const certifications = [
  'Angular – Infosys Springboard',
  'MongoDB Certified Developer (2024)',
  'Meta Front-End Developer (2024)',
  '250+ LeetCode problems solved',
]
