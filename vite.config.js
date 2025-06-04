import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src")
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1500, // Default is 500KB — raised to reduce false alarms
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate node_modules into a 'vendor' chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          // Example: Split heavy routes/pages (customize this as needed)
          if (id.includes('src/pages/Profile')) {
            return 'profile';
          }

          return undefined;
        }
      }
    }
  }
})
