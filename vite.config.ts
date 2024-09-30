import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',  // Fixed name for the main entry file
        chunkFileNames: 'index.js',   // Fixed name for chunks (if applicable)
        assetFileNames: 'index.js',    // Fixed name for assets
      },
    },
  },
})
