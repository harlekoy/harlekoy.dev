// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  // Cloudflare Pages configuration
  nitro: {
    preset: 'cloudflare-pages',
    nodeCompat: true
  },
  // Enable static site generation
  ssr: true,
  experimental: {
    payloadExtraction: false
  },
  // This is the key part:
  prerender: {
    crawlLinks: true,
    routes: ['/'] // Add any specific routes you want to include explicitly
  }
})