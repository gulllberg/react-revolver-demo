import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://gulllberg.github.io/react-revolver-demo/
  base: '/react-revolver-demo/',
});
