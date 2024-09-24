import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests starting with `/api` to the backend server
      '/workout': {
        target: 'http://localhost:4000',  // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
