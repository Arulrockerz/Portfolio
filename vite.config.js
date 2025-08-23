import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 4173, // optional, or use $PORT in Render Start Command
    allowedHosts: ['portfolio-6-t3xf.onrender.com']
  }
});
