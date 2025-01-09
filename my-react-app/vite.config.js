import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // nyalain untuk wsl hard reload
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
})
