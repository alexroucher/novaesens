import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Optimisations pour les performances
  build: {
    // Inliner le CSS critique pour éviter le blocage
    inlineStylesheets: 'auto',
    
    // Optimiser les assets
    assets: '_astro'
  },
  
  // Optimisation du CSS et JS
  vite: {
    build: {
      // Optimiser la taille des chunks CSS et JS
      cssCodeSplit: false, // Regrouper le CSS pour éviter les cascades
      rollupOptions: {
        output: {
          // Optimiser les chunks pour réduire les cascades
          manualChunks: (id) => {
            // Regrouper les dépendances communes
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            // Regrouper les styles critiques
            if (id.includes('styles/')) {
              return 'critical-styles';
            }
            // Scripts de base
            if (id.includes('layouts/') || id.includes('components/')) {
              return 'core';
            }
          }
        }
      }
    },
    css: {
      // Optimiser la transformation CSS
      transformer: 'postcss'
    }
  },
  
  // Configuration pour les performances
  experimental: {
    // Optimiser les imports CSS
    optimizeHoistedScript: true
  }
}); 