import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Añade esto

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.tsx') // Ruta relativa
    }
  }
})
