import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    vuetify({ autoImport: true }),
  ],

  resolve: {
        alias: {
            '@': '/src',
        },
    },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/base.scss";`
      },
    },
  },

  // Proxy API requests during development:
  // Any request starting with /fathomnet is forwarded to the FathomNet server.
  // The "/fathomnet" prefix is removed, helping avoid CORS issues and keeping fetch URLs simple.
  server: {
    proxy: {
      '/fathomnet': {
        target: 'http://database.fathomnet.org:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fathomnet/, '')
      }
    }
  }
});