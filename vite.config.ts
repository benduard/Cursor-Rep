import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-icons',
      'lucide-react',
      'framer-motion',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
      'tailwindcss-animate',
      'next-themes',
      'sonner',
      'zod',
      'react-hook-form',
      '@hookform/resolvers',
      'date-fns',
      'recharts',
      'react-type-animation',
      'embla-carousel-react',
      'react-day-picker',
      'react-resizable-panels',
      'cmdk',
      'input-otp',
      'vaul',
      'motion'
    ],
    exclude: ['@supabase/supabase-js']
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [],
    },
  },
  server: {
    port: 5173,
    host: 'localhost',
    strictPort: true,
    open: true
  }
});