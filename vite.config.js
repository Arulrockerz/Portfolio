import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,          // allow Vite to listen on all network interfaces
    port: 4173,          // optional, or let Render use $PORT
    allowedHosts: 'all'  // allow any host, including Render’s dynamic URLs
  }
});

