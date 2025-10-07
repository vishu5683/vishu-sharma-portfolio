// Script to populate embeddings for your portfolio data
// Run this with: node populate-embeddings.js

const { createClient } = require('@supabase/supabase-js')
const OpenAI = require('openai')

// Initialize clients
const supabase = createClient(
  'https://ygptybmdcluxpikepyzr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncHR5Ym1kY2x1eHBpa2VweXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MTQ2ODAsImV4cCI6MjA3NTM5MDY4MH0.mtEQvqlgnec3_19QT5HkCC8OHoAT36BQTOJSlo48baw'
)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-openai-api-key-here'
})

async function generateEmbedding(text) {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    })
    return response.data[0].embedding
  } catch (error) {
    console.error('Error generating embedding:', error)
    return null
  }
}

async function populateProjectEmbeddings() {
  console.log('Fetching projects...')
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .is('embedding', null)

  if (error) {
    console.error('Error fetching projects:', error)
    return
  }

  console.log(`Found ${projects.length} projects without embeddings`)

  for (const project of projects) {
    console.log(`Processing project: ${project.title}`)
    
    const textToEmbed = `${project.title} ${project.description} ${project.technologies.join(' ')}`
    const embedding = await generateEmbedding(textToEmbed)
    
    if (embedding) {
      const { error: updateError } = await supabase
        .from('projects')
        .update({ embedding })
        .eq('id', project.id)
      
      if (updateError) {
        console.error(`Error updating project ${project.title}:`, updateError)
      } else {
        console.log(`✅ Updated embedding for: ${project.title}`)
      }
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

async function populateResumeEmbeddings() {
  console.log('Fetching resume chunks...')
  const { data: chunks, error } = await supabase
    .from('resume_chunks')
    .select('*')
    .is('embedding', null)

  if (error) {
    console.error('Error fetching resume chunks:', error)
    return
  }

  console.log(`Found ${chunks.length} resume chunks without embeddings`)

  for (const chunk of chunks) {
    console.log(`Processing resume chunk: ${chunk.content.substring(0, 50)}...`)
    
    const embedding = await generateEmbedding(chunk.content)
    
    if (embedding) {
      const { error: updateError } = await supabase
        .from('resume_chunks')
        .update({ embedding })
        .eq('id', chunk.id)
      
      if (updateError) {
        console.error(`Error updating resume chunk:`, updateError)
      } else {
        console.log(`✅ Updated embedding for resume chunk`)
      }
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

async function main() {
  console.log('🚀 Starting embedding population...')
  
  if (!process.env.OPENAI_API_KEY) {
    console.log('⚠️  OPENAI_API_KEY not found. Please set it in your environment.')
    console.log('   The script will run but embeddings will not be generated.')
  }
  
  await populateProjectEmbeddings()
  await populateResumeEmbeddings()
  
  console.log('✅ Embedding population complete!')
}

main().catch(console.error)
