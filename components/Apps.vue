<template>
  <section id="apps" class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">Apps I've Built</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        <p class="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          A collection of products I've designed, built, and shipped end-to-end.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a
          v-for="app in apps"
          :key="app.url"
          :href="app.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block h-full"
        >
          <div class="bg-gray-800/80 hover:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full p-8">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <Icon :icon="app.icon" class="text-2xl sm:text-3xl text-white" />
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg sm:text-xl">{{ app.name }}</h3>
                <span class="text-emerald-400 text-xs sm:text-sm">{{ app.domain }}</span>
              </div>
            </div>
            <p class="text-gray-400 leading-relaxed text-sm sm:text-base">
              {{ app.description }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const apps = [
  {
    name: 'Speed Invoices',
    domain: 'speedinvoices.com',
    url: 'https://speedinvoices.com',
    icon: 'pixelarticons:receipt',
    description: 'Create and send professional invoices in seconds. A fast, no-friction invoicing tool for freelancers and small businesses.'
  },
  {
    name: 'Feedback Here',
    domain: 'feedbackhere.co',
    url: 'https://feedbackhere.co',
    icon: 'pixelarticons:message-text',
    description: 'Collect and manage customer feedback in one place, so teams can listen, prioritize, and ship what users actually want.'
  },
  {
    name: 'Beaconable',
    domain: 'beaconable.com',
    url: 'https://beaconable.com',
    icon: 'pixelarticons:trending-up',
    description: 'Lightweight, privacy-friendly web analytics. Drop in a single snippet and start understanding your traffic without the bloat.'
  },
  {
    name: 'Tax Nomad',
    domain: 'taxnomad.es',
    url: 'https://taxnomad.es',
    icon: 'pixelarticons:briefcase',
    description: 'Tax guidance and tooling for digital nomads and remote workers navigating life and work in Spain.'
  }
]
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
