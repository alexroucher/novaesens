
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuration optimisée pour O2switch
  build: {
    // Dossier de sortie (par défaut 'dist')
    outDir: 'dist',
    // Dossier des assets statiques
    assets: '_astro',
    // Génération de sitemap automatique
    sitemap: true,
    // Optimisation des assets
    assetsInlineLimit: 4096, // 4KB - inline les petits assets
  },
  
  // Configuration du serveur de développement
  server: {
    port: 4321,
    host: true
  },
  
  // Configuration SEO 
  output : 'static',
  site: 'https://www.novaesens.fr',
  
  // Optimisations pour la production
  vite: {
    build: {
      // Minification CSS et JS (utilise esbuild par défaut)
      minify: true,
      // Optimisation des chunks
      rollupOptions: {
        output: {
          manualChunks: {
            // Séparer les dépendances externes
            vendor: ['@emailjs/browser']
          }
        }
      }
    },
    // Optimisation CSS
    css: {
      devSourcemap: false
    }
  }
}); 