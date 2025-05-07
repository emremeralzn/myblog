import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// replace with your repo name
export default defineConfig({
  base: '/myblog/', // Örn: '/blog-projem/'
  plugins: [react()],
})
