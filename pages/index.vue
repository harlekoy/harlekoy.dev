<template>
  <div class="min-h-screen bg-black relative overflow-hidden">
    <!-- Navigation -->
    <Navigation />

    <!-- Hero Section -->
    <Hero />

    <!-- Tech Stack Section -->
    <TechStack />

    <!-- About Section -->
    <About />

    <!-- Experience Section -->
    <Experience />

    <!-- Community Involvement Section -->
    <Community />

    <!-- Contact Section -->
    <Contact />

    <!-- Footer -->
    <footer class="py-8 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-gray-400">
          © {{ currentYear }} Harley. Crafted with ❤️ and lots of 🥭
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

// Set page title and meta tags for SSG
useHead({
  title: 'Harlequin Doyon | Full-stack developer',
  meta: [
    { name: 'description', content: 'I\'m a Full-stack developer who loves making apps come alive with Laravel and Vue.js. I thrive under pressure and love turning ideas into interactive experiences.' },
    { name: 'author', content: 'Harlequin Doyon' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://harlekoy.dev' },
    { property: 'og:title', content: 'Harlequin Doyon | Full-stack developer' },
    { property: 'og:description', content: 'I\'m a Full-stack developer who loves making apps come alive with Laravel and Vue.js. I thrive under pressure and love turning ideas into interactive experiences.' },
    { property: 'og:image', content: 'https://harlekoy.dev/meta.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '628' },
    { property: 'og:site_name', content: 'Harlequin Doyon' },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://harlekoy.dev' },
    { name: 'twitter:title', content: 'Harlequin Doyon | Full-stack developer' },
    { name: 'twitter:description', content: 'I\'m a Full-stack developer who loves making apps come alive with Laravel and Vue.js. I thrive under pressure and love turning ideas into interactive experiences.' },
    { name: 'twitter:image', content: 'https://harlekoy.dev/meta.png' }
  ]
})

// Computed property for current year
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #111827;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #34d399, #0d9488);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #10b981, #0f766e);
}

/* Floating animation for background elements */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Custom blinking cursor animation */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.cursor-blink {
  animation: blink 1s infinite;
  color: #10b981;
  font-weight: bold;
}
</style>