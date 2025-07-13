// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  // Cloudflare Pages configuration
  nitro: {
    preset: 'cloudflare-pages',
    nodeCompat: true
  },
  // Build configuration for static site generation
  ssr: true,
  // Ensure proper static generation
  experimental: {
    payloadExtraction: false
  }
})
