// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Demo static, publicat pe GitHub Pages sub /atelier-onix-demo.
// TODO(real): la proiectul real trece pe output "server" și rulează pe VPS + Coolify;
// atunci site/base se schimbă cu domeniul clientului.
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/atelier-onix-demo',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
