<template>
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">About Me</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <p class="text-gray-300 text-lg leading-relaxed">
            Hi! I'm a full-stack developer who gets excited about making applications interactive and handling those intense launch moments. 
            While I can definitely create static frontend pages, my sweet spot is building robust backend systems and working closely with teams.
          </p>
          <p class="text-gray-300 text-lg leading-relaxed">
            I love crafting technical specifications that help other developers succeed, providing support when things need fixing, 
            and jumping in to solve user issues quickly. Some of my best work happens during those high-stakes launches where everything needs to work perfectly.
          </p>
          <p class="text-sm italic text-gray-500">As you may notice, I am using Ghibli characters. Yes. I love their movies ❤️ — and yes, I did not design these characters. Sorry!</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="overflow-hidden bg-gray-800/70 rounded-2xl flex items-center min-h-[96px] shadow-md hover:shadow-lg transition-shadow group border border-transparent hover:border-white">
            <div class="flex-shrink-0 overflow-hidden">
              <img src="/development.png" class="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-125" alt="Backend Development" />
            </div>
            <div class="p-4">
              <h3 class="text-white font-semibold mb-1">Backend Development</h3>
              <p class="text-gray-400 text-sm">Robust API & systems</p>
            </div>
          </div>
          <div class="overflow-hidden bg-gray-800/70 rounded-2xl flex items-center min-h-[96px] shadow-md hover:shadow-lg transition-shadow group border border-transparent hover:border-white">
            <div class="flex-shrink-0 overflow-hidden">
              <img src="/ponyo.png" class="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-125" alt="Interactive Apps" />
            </div>
            <div class="p-4">
              <h3 class="text-white font-semibold mb-1">Interactive Apps</h3>
              <p class="text-gray-400 text-sm">Dynamic functionality</p>
            </div>
          </div>
          <div class="overflow-hidden bg-gray-800/70 rounded-2xl flex items-center min-h-[96px] shadow-md hover:shadow-lg transition-shadow group border border-transparent hover:border-white">
            <div class="flex-shrink-0 overflow-hidden">
              <img src="/flying-totoro.png" class="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-125" alt="High-Pressure Launches" />
            </div>
            <div class="p-4">
              <h3 class="text-white font-semibold mb-1">Hard Date Launches</h3>
              <p class="text-gray-400 text-sm">Critical deployments</p>
            </div>
          </div>
          <div class="overflow-hidden bg-gray-800/70 rounded-2xl flex items-center min-h-[96px] shadow-md hover:shadow-lg transition-shadow group border border-transparent hover:border-white">
            <div class="flex-shrink-0 overflow-hidden">
              <img src="/support.png" class="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-125" alt="Dev Support" />
            </div>
            <div class="p-4">
              <h3 class="text-white font-semibold mb-1">Customer Support</h3>
              <p class="text-gray-400 text-sm">Maintenance & fixes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style> 