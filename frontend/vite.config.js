import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to your desired port
    host: '127.0.0.1' // Ensures it runs on localhost instead of IPv6 (::1)
  }
})
