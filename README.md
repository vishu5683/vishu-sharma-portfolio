# 🚀 Vishu Sharma - Full Stack Developer Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)

**A modern, responsive portfolio website showcasing full-stack development expertise with interactive charts, AI-powered features, and stunning animations.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-View_Portfolio-blue?style=for-the-badge)](https://vishusharma.dev)
[![GitHub](https://img.shields.io/badge/📁_GitHub-View_Source-black?style=for-the-badge&logo=github)](https://github.com/vishu5683/vishu-sharma-portfolio)

</div>

---

## ✨ Features

### 🎨 **Modern Design System**
- **Dark/Light Mode Toggle** - Smooth theme transitions with gradient themes
- **Glassmorphism Effects** - Backdrop blur and translucent cards
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Google Fonts Integration** - Inter, Poppins, and JetBrains Mono typography

### 📊 **Interactive Visualizations**
- **Skills Radar Chart** - Proficiency across 6 technical categories
- **Project Metrics Bar Chart** - Performance improvements visualization
- **Animated Icons** - Hover effects on skill categories
- **Key Achievements** - Animated counter cards with metrics

### 🎭 **Advanced Animations**
- **Framer Motion Integration** - Smooth page transitions and scroll animations
- **Typewriter Effect** - Dynamic job title rotation in hero section
- **Hover Effects** - Scale, glow, and transform animations
- **Staggered Animations** - Sequential element reveals on scroll

### 🤖 **AI-Powered Features**
- **Semantic Search** - Natural language project search using OpenAI embeddings
- **AI Assistant Chat** - Interactive chatbot for portfolio inquiries
- **Smart Recommendations** - Context-aware project suggestions

### ⚡ **Performance Optimized**
- **Dynamic Imports** - Lazy loading for better performance
- **Chart.js Integration** - Optimized chart rendering
- **Font Preloading** - Faster font loading
- **Code Splitting** - Reduced bundle size

---

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Material-UI (MUI)** - Component library with custom theming
- **Framer Motion** - Animation library
- **Chart.js + react-chartjs-2** - Data visualization

### **Styling & Design**
- **Custom Theme System** - Dark/light mode with gradient palettes
- **Glassmorphism Design** - Modern translucent effects
- **Responsive Grid System** - Mobile-first approach
- **Google Fonts** - Typography optimization

### **AI & Backend**
- **OpenAI API** - GPT-4o-mini for AI features
- **Supabase** - Vector embeddings and database
- **Next.js API Routes** - Serverless backend functions

### **Development Tools**
- **ESLint & Prettier** - Code quality and formatting
- **PostCSS & Autoprefixer** - CSS processing
- **Git** - Version control

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishu5683/vishu-sharma-portfolio.git
   cd vishu-sharma-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   OPENAI_API_KEY=your_openai_api_key
   DATABASE_URL=your_database_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── search/        # Semantic search endpoint
│   │   │   └── assistant/     # AI assistant endpoint
│   │   ├── resume/            # Resume page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ThemeProvider.tsx  # Theme context
│   │   ├── HeaderMUI.tsx      # Navigation header
│   │   ├── HeroMUI.tsx        # Hero section
│   │   ├── AboutMUI.tsx      # About section
│   │   ├── ExperienceMUI.tsx  # Experience section
│   │   ├── ProjectsMUI.tsx   # Projects showcase
│   │   ├── SkillsMUI.tsx      # Skills with charts
│   │   ├── ContactMUI.tsx     # Contact form
│   │   ├── FooterMUI.tsx      # Footer
│   │   ├── SkillsRadar.tsx    # Skills radar chart
│   │   ├── ProjectMetricsBar.tsx # Project metrics chart
│   │   ├── SemanticSearch.tsx # AI search component
│   │   └── AssistantChat.tsx  # AI chat component
│   ├── theme/                 # Theme configuration
│   │   └── theme.ts           # MUI theme definitions
│   └── lib/                   # Utility libraries
│       ├── supabase.ts        # Supabase client
│       ├── seo.ts             # SEO utilities
│       ├── performance.ts     # Performance optimizations
│       └── lazy-components.tsx # Dynamic imports
├── public/                    # Static assets
├── .env.local                # Environment variables
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## 🎯 Key Sections

### **🏠 Hero Section**
- Animated typewriter effect for job titles
- Floating background elements
- Call-to-action buttons with hover effects
- Quick stats card with contact information

### **👨‍💻 About Section**
- Professional summary with metrics
- Key achievements with animated counters
- Technology stack showcase

### **💼 Experience Section**
- Timeline of professional experience
- Company details and achievements
- Technology highlights for each role

### **🚀 Projects Section**
- Featured projects with metrics
- Interactive project cards
- Technology tags and live demos
- Performance improvement visualizations

### **🛠️ Skills Section**
- Interactive radar chart for skill proficiency
- Categorized skill sets with icons
- Key achievements with metrics
- Animated skill cards

### **🤖 AI Features**
- Semantic search through projects
- AI assistant for portfolio inquiries
- Context-aware recommendations
- Natural language processing

### **📞 Contact Section**
- Interactive contact form with validation
- Contact information cards
- Social media links
- Success/error notifications

---

## 🎨 Design System

### **Color Palette**
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Accent**: `#c026d3` (Purple)
- **Background**: `#fafafa` (Light) / `#0f172a` (Dark)

### **Typography**
- **Headings**: Poppins (600-800 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono

### **Components**
- **Border Radius**: 20px (consistent)
- **Shadows**: Layered depth system
- **Transitions**: 0.3s cubic-bezier easing
- **Animations**: Framer Motion integration

---

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with dynamic imports
- **Loading Time**: < 2s on 3G
- **Core Web Vitals**: All green metrics

---

## 🤖 AI Features Setup

### **1. Supabase Setup**
```sql
-- Run the database setup script
\i database-setup.sql
```

### **2. OpenAI Integration**
```bash
# Add your OpenAI API key
OPENAI_API_KEY=your_openai_api_key
```

### **3. Populate Embeddings**
```bash
node populate-embeddings.js
```

---

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically

### **Netlify**
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables

### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

All components are fully responsive with mobile-first design approach.

---

## 🔧 Customization

### **Theme Colors**
Edit `src/theme/theme.ts` to customize colors:
```typescript
export const lightTheme = createTheme({
  palette: {
    primary: { main: '#your-color' },
    secondary: { main: '#your-color' },
  },
})
```

### **Content Updates**
- **Personal Info**: Update `src/components/HeroMUI.tsx`
- **Projects**: Modify `src/components/ProjectsMUI.tsx`
- **Skills**: Edit `src/components/SkillsMUI.tsx`
- **Experience**: Update `src/components/ExperienceMUI.tsx`

---

## 📈 Analytics & SEO

- **Meta Tags**: Optimized for search engines
- **Open Graph**: Social media sharing
- **JSON-LD**: Structured data for rich snippets
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine directives

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Vishu Sharma**
- **Email**: vishubhardwaj46@gmail.com
- **LinkedIn**: [vishu-s-314661ab](https://linkedin.com/in/vishu-s-314661ab)
- **GitHub**: [vishu5683](https://github.com/vishu5683)
- **Portfolio**: [vishusharma.dev](https://vishusharma.dev)

---

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Material-UI Team** - Beautiful component library
- **Framer Motion** - Smooth animations
- **Chart.js** - Data visualization
- **OpenAI** - AI capabilities
- **Supabase** - Backend services

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

[![GitHub stars](https://img.shields.io/github/stars/vishu5683/vishu-sharma-portfolio?style=social)](https://github.com/vishu5683/vishu-sharma-portfolio)
[![GitHub forks](https://img.shields.io/github/forks/vishu5683/vishu-sharma-portfolio?style=social)](https://github.com/vishu5683/vishu-sharma-portfolio)

**Made with ❤️ by [Vishu Sharma](https://github.com/vishu5683)**

</div>