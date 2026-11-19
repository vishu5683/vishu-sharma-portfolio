import type { MetadataRoute } from 'next'

const base = 'https://vishu-sharma-portfolio.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/resume`, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
