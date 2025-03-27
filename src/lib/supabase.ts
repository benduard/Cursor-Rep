import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cfiunbuuxhitwrdxgctt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmaXVuYnV1eGhpdHdyZHhnY3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3ODYwODQsImV4cCI6MjA1ODM2MjA4NH0.b4GSkrbwV6LRIh3sDoVWNdfeQyuxmNZj4bwqlKqAdjI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
}) 