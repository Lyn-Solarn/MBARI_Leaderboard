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