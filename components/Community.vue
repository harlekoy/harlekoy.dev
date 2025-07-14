<template>
  <section id="community" class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">Community Involvement</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a href="https://www.facebook.com/laravelcebu" target="_blank" rel="noopener noreferrer" class="block h-full">
          <div class="bg-gray-800/80 hover:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
            <div class="mb-4 overflow-hidden">
              <img src="/community.png" alt="Open Source" class="w-full aspect-video object-cover transition-transform duration-300 hover:scale-125" />
            </div>
            <div class="px-8 pt-4">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon icon="pixelarticons:users" class="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 class="text-white font-semibold text-lg sm:text-xl">Laravel Cebu Community</h3>
              </div>
              <p class="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                Leading the Laravel community in Cebu since 2014, I help create events, give tech-talks, and facilitate knowledge-sharing sessions to grow the local developer ecosystem.
              </p>
            </div>
          </div>
        </a>

        <a href="https://github.com/harlekoy?tab=repositories" target="_blank" rel="noopener noreferrer" class="block h-full">
          <div class="bg-gray-800/80 hover:bg-gray-800  rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
            <div class="mb-4 overflow-hidden">
              <img src="/open-source.png" alt="Open Source" class="w-full aspect-video object-cover transition-transform duration-300 hover:scale-125" />
            </div>
            <div class="px-8 pt-4">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon icon="pixelarticons:git-commit" class="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 class="text-white font-semibold text-lg sm:text-xl">Open Source</h3>
              </div>
              <p class="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                Active contributor to open source projects for over 10 years, focusing on Laravel packages, developer tools, and web frameworks. Passionate about giving back to the community that has shaped my career.
              </p>
            </div>
          </div>
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