import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['/assets/main.css', '@fortawesome/fontawesome-free/css/all.css'],
    modules: ['@nuxtjs/tailwindcss'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  

})