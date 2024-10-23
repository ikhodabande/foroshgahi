import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Registers service worker automatically and updates it
      manifest: {
        name: 'فروشگاه وبکام',
        short_name: 'وبکام شاپ',
        description: 'برنامه فروشگاهی وبکام',
        lang: "fa",
        start_url: "/",
        scope: "/",
        display: "fullscreen",
        orientation: "portrait",
        theme_color: '#ffffff',
        "icons": [
          {
            "src": "logo192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"  // Used without any modification
          },
          {
            "src": "logo512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"  // Used without any modification
          }
          
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'], // Caches all required assets
      },
    }),
  ],
});
