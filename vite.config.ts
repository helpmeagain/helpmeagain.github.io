import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

// https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
})
