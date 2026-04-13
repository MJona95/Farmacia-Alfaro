// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mjona95.github.io',
  base: '/Farmacia-Alfaro', // 👈 El nombre de tu repositorio
  outDir: './dist',          // 👈 Asegurar que construye en dist/
  trailingSlash: 'always',   // 👈 Opcional: ayuda con las rutas
});