import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'dist',
    // additional configuration options
    rollupOptions: {
      input: './src/main.tsx', // Main entry point for your app
    }
  },
  
});
