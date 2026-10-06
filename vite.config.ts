import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH: subpasta onde o site é publicado (ex.: '/patricia-vasconcelos-psicologa/' no GitHub Pages).
// Com domínio próprio, deixe '/'.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
});
