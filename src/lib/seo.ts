import { Metadata } from 'next'

interface MetaOptions {
  title: string
  desc: string
  url?: string
  image?: string
}

export function createMeta({ title, desc, url, image }: MetaOptions): Metadata {
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      url,
      images: image ? [{ url: image }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: image ? [image] : [],
    },
  }
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  url?: string
  githubUrl?: string
  image?: string
  createdAt: string
}

export function generateProjectJsonLD(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: project.url,
    author: {
      '@type': 'Person',
      name: 'Vishu Sharma',
    },
    dateCreated: project.createdAt,
    keywords: project.technologies.join(', '),
    ...(project.githubUrl && {
      codeRepository: project.githubUrl,
    }),
    ...(project.image && {
      image: project.image,
    }),
  }
}

// Example usage in app/projects/[slug]/page.tsx:
/*
import { createMeta, generateProjectJsonLD } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  
  return createMeta({
    title: `${project.title} - Vishu Sharma Portfolio`,
    desc: project.description,
    url: `https://vishusharma.dev/projects/${params.slug}`,
    image: project.image,
  })
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  const jsonLD = generateProjectJsonLD(project)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <div>Project content...</div>
    </>
  )
}
*/
