import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ygptybmdcluxpikepyzr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncHR5Ym1kY2x1eHBpa2VweXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MTQ2ODAsImV4cCI6MjA3NTM5MDY4MH0.mtEQvqlgnec3_19QT5HkCC8OHoAT36BQTOJSlo48baw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
