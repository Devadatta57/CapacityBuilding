import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Listen on all interfaces so devices on the same Wi-Fi can reach the app
  // at http://192.168.29.96:5173 as well as http://localhost:5173.
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
})
