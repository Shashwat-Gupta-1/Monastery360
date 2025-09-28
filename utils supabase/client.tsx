import { createClient } from 'npm:@supabase/supabase-js@2.47.9'
import { projectId, publicAnonKey } from './info'

export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
)