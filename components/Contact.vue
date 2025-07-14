<template>
  <section id="contact" class="py-12 px-4 sm:px-6 lg:px-8 bg-black">
    <div class="max-w-2xl mx-auto text-center">
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-white mb-3">Let's Connect</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-4 rounded-full"></div>
        <p class="text-gray-300 text-base leading-relaxed">Have something interesting you'd love to discuss? Whether it's tech, ideas, or just want to share something cool—hit me up!</p>
      </div>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
        <a href="mailto:hello@harlekoy.dev" class="flex items-center space-x-3 hover:text-emerald-400 transition-colors">
          <Icon icon="pixelarticons:mail" class="text-emerald-400 text-xl" />
          <span class="text-gray-300">hello@harlekoy.dev</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
// No additional logic needed for this component
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style> 