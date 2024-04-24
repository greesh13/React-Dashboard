import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React-Dashboard/',
  build: {
    outDir: 'build',
    rollupOptions: {
      external: ['./build/main.js'] // Adjust the path as needed
    }
  }
});
