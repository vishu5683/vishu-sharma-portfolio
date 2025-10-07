// Performance optimization utilities for Next.js portfolio

// 1. Preload fonts - Use in layout.tsx or _document.tsx
export const preloadFonts = `
  <link
    rel="preload"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
    as="style"
    onLoad="this.onload=null;this.rel='stylesheet'"
  />
  <link
    rel="preload"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    as="style"
    onLoad="this.onload=null;this.rel='stylesheet'"
  />
`

// 2. Lazy load non-critical components
// Note: Use lazy-components.tsx for dynamic imports with JSX

// 3. Optimize images with next/image
// Note: Use next/image directly in components for optimized images

// 4. Split heavy libraries
// Note: Use lazy-components.tsx for dynamic imports with JSX

// 5. Lighthouse improvement checklist
export const lighthouseChecklist = [
  {
    priority: 'High',
    item: 'Preload critical fonts',
    code: 'Use preloadFonts string in layout.tsx',
  },
  {
    priority: 'High',
    item: 'Lazy load non-critical components',
    code: 'Use dynamic imports for heavy components',
  },
  {
    priority: 'High',
    item: 'Optimize images with next/image',
    code: 'Use Next.js Image component with proper sizing',
  },
  {
    priority: 'Medium',
    item: 'Split heavy libraries',
    code: 'Use dynamic imports for chart libraries, animations',
  },
  {
    priority: 'Medium',
    item: 'Minimize JavaScript bundles',
    code: 'Use tree shaking and code splitting',
  },
  {
    priority: 'Low',
    item: 'Add service worker for caching',
    code: 'Implement PWA features for offline support',
  },
]
