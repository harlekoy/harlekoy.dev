// https://nuxt.com/docs/api/configuration/nuxt-config

// Beaconable privacy-friendly analytics. Only injected in production builds so
// local/preview traffic never hits the live dashboard. Endpoint + domain are
// overridable via env; defaults track harlekoy.dev against beaconable.com.
const beaconAnalytics
  = process.env.NODE_ENV === 'production'
    ? [
        {
          src: process.env.NUXT_PUBLIC_BEACON_SRC || 'https://beaconable.com/js/script.js',
          defer: true,
          'data-domain': process.env.NUXT_PUBLIC_BEACON_DOMAIN || 'harlekoy.dev',
        },
      ]
    : []

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      script: beaconAnalytics
    }
  },
  // Cloudflare Pages configuration
  nitro: {
    preset: 'cloudflare-pages',
    nodeCompat: true,
    prerender: {
      routes: ['/']
    }
  },
  // Vite configuration to allow all hosts
  vite: {
    server: {
      allowedHosts: ['harlekoy.test']
    }
  },
  // Enable static site generation
  ssr: true,
  experimental: {
    payloadExtraction: false
  }
})