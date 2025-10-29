import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base URL for GitHub Pages (change to '/' for root domain)
  base: '/bearshop_landingpage/',

  // Development server configuration
  server: {
    port: 3000,
    proxy: {
      // Proxy API requests to PHP backend during development
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        // Only proxy if using PHP backend
        configure: (proxy, options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('Proxy error - make sure PHP server is running on port 8000')
            console.log('Run: php -S localhost:8000 -t public')
          })
        }
      }
    }
  },

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',

    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom']
        }
      }
    },

    // Performance optimizations
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false
  },

  // Environment variables prefix
  envPrefix: 'VITE_',

  // Preview server (for testing production builds)
  preview: {
    port: 4173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})
