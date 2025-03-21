import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Vite_CICD_Github/",
  server: {
    open: true,
    port:3000,
  },
  define: {
    'import.meta.env.VITE_OPENAI_API_KEY': '""',
  },
})
