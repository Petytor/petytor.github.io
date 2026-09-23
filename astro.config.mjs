import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Konwencja GitHub Pages dla organizacji: repo nazwane dokładnie "<org>.github.io" publikuje
// się automatycznie pod tym adresem, bez potrzeby ustawiania własnej domeny.
export default defineConfig({
  site: 'https://petytor.github.io',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
