import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

// Log environment variable status (without exposing values)
console.log('Environment check:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseKey,
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV
});

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables:', {
    url: supabaseUrl ? 'present' : 'missing',
    key: supabaseKey ? 'present' : 'missing'
  });
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client with additional options
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'Authorization': `Bearer ${supabaseKey}`
    }
  }
});

// Test the connection only in development
if (import.meta.env.DEV) {
  supabase.from('contact_messages').select('count').limit(1)
    .then(({ data, error }) => {
      if (error) {
        console.error('Supabase connection error:', error);
      } else {
        console.log('Supabase connected successfully');
      }
    });
} 