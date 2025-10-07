-- Database setup for AI-powered portfolio features
-- Run this in your Supabase SQL editor

-- Enable the vector extension for embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- Create projects table with embeddings
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[],
  url TEXT,
  github_url TEXT,
  embedding VECTOR(1536),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create resume chunks table for AI assistant
CREATE TABLE IF NOT EXISTS resume_chunks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  embedding VECTOR(1536),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume_chunks ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a portfolio)
CREATE POLICY "Allow public read access to projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to resume_chunks" ON resume_chunks
  FOR SELECT USING (true);

-- Create indexes for vector similarity search
CREATE INDEX IF NOT EXISTS projects_embedding_idx ON projects USING ivfflat (embedding vector_cosine_ops);
CREATE INDEX IF NOT EXISTS resume_chunks_embedding_idx ON resume_chunks USING ivfflat (embedding vector_cosine_ops);

-- Create search functions
CREATE OR REPLACE FUNCTION search_projects(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  description TEXT,
  technologies TEXT[],
  url TEXT,
  github_url TEXT,
  similarity FLOAT
)
LANGUAGE SQL
AS $$
  SELECT
    p.id,
    p.title,
    p.description,
    p.technologies,
    p.url,
    p.github_url,
    1 - (p.embedding <=> query_embedding) AS similarity
  FROM projects p
  WHERE 1 - (p.embedding <=> query_embedding) > match_threshold
  ORDER BY p.embedding <=> query_embedding
  LIMIT match_count;
$$;

CREATE OR REPLACE FUNCTION search_resume_chunks(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE (
  id UUID,
  content TEXT,
  similarity FLOAT
)
LANGUAGE SQL
AS $$
  SELECT
    r.id,
    r.content,
    1 - (r.embedding <=> query_embedding) AS similarity
  FROM resume_chunks r
  WHERE 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  LIMIT match_count;
$$;

-- Insert sample project data
INSERT INTO projects (title, description, technologies, url, github_url) VALUES
(
  'Enterprise Logistics Platform',
  'Modernized business systems using React.js, Next.js, and ASP.NET APIs, delivering 35% faster performance and improved scalability.',
  ARRAY['React.js', 'Next.js', 'ASP.NET', 'Oracle', 'PostgreSQL'],
  'https://example.com/logistics',
  'https://github.com/vishu5683/logistics-platform'
),
(
  'Analytics Dashboard',
  'Built real-time reporting platform with React, Chart.js, Zustand, and ASP.NET APIs, reducing decision-making time by 25%.',
  ARRAY['React.js', 'Chart.js', 'Zustand', 'ASP.NET', 'Oracle'],
  'https://example.com/analytics',
  'https://github.com/vishu5683/analytics-dashboard'
),
(
  'EdTech Learning Platform',
  'Delivered scalable learning platform (1000+ users) with live video and payment integrations, boosting user engagement by 40%.',
  ARRAY['React.js', 'Node.js', 'Agora SDK', 'SkipCash', 'MongoDB'],
  'https://example.com/edtech',
  'https://github.com/vishu5683/edtech-platform'
),
(
  'HRMS Dashboard',
  'Developed payroll & attendance analytics system using React, Redux Toolkit, and Tailwind, reducing HR manual effort by 30%.',
  ARRAY['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
  'https://example.com/hrms',
  'https://github.com/vishu5683/hrms-dashboard'
);

-- Insert sample resume chunks
INSERT INTO resume_chunks (content) VALUES
('Vishu Sharma is a Full Stack Developer with 2+ years of experience designing and delivering enterprise-grade web applications using React.js, Next.js, ASP.NET, Node.js, and Oracle/PostgreSQL.'),
('Proven success in building scalable business systems, client-facing platforms, and digital solutions that improved performance by up to 35% and boosted user engagement by 40%.'),
('Skilled in REST API development, authentication (JWT/OAuth), CI/CD pipelines, and Agile/Scrum delivery. Certified Meta Front-End Developer with expertise in UI/UX design, cloud deployments (AWS/Azure), testing (Jest, Unit Testing), and performance optimization.'),
('Currently working as Software Development Engineer at Transport Corporation of India Ltd, where he engineered enterprise logistics platforms by migrating legacy .NET modules to React.js/Next.js with ASP.NET APIs, achieving 35% faster load times.'),
('Previously worked as Frontend Developer at Techugo, where he delivered EdTech learning app with live video, chat, and payments, achieving a 40% rise in engagement among 1K+ users.'),
('Technical skills include React.js, Next.js, Redux Toolkit, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material-UI, ASP.NET, Node.js, Express.js, REST APIs, C#, Authentication (JWT/OAuth), Oracle, PostgreSQL, Prisma, Git, Jenkins, GitHub Actions, CI/CD, Vite, Agile/Scrum, Jest, Unit Testing, Performance Audits, AWS, Azure, Responsive Design, Cross-Browser Compatibility, Modern UI Frameworks.'),
('Education: MCA (Master of Computer Applications) from Chandigarh University (2021-2023), B.Sc. (Computer Science) from Meerut College (2018-2021).'),
('Certifications: Meta Front-End Developer (Coursera) 2024, Responsive Web Design (freeCodeCamp) 2024, JavaScript Algorithms & Data Structures (freeCodeCamp) 2023.'),
('Key achievements: Improved platform performance by 35% by modernizing enterprise applications, increased user engagement by 40% on EdTech platform, reduced HR operations workload by 30% through dashboard automation, delivered enterprise-grade digital solutions in Agile teams.'),
('Contact: vishubhardwaj46@gmail.com, +91-7351734476, +91-9760204915, Gurgaon, HR, India. GitHub: github.com/vishu5683, LinkedIn: linkedin.com/in/vishu-s-314661ab.');
