import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      eslint: {
        // This prevents ESLint errors from blocking the build
        // Works only if using `vite-plugin-eslint`, otherwise this is not needed
        ignoreDuringBuilds: true,
      }
    }),
    tailwindcss(),
  ]
})
