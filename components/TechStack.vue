<template>
  <section id="tech-stack" class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">Tech Stack</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
      </div>

      <!-- Primary -->
      <div class="mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-gray-800/70 rounded-2xl overflow-hidden hover:bg-gray-800/90 transition-all duration-300 shadow-md hover:shadow-lg group">
            <div class="flex flex-col sm:grid sm:grid-cols-2">
              <div class="bg-gray-800 flex items-center justify-center overflow-hidden h-56 sm:h-auto">
                <img src="/tech/laravel.png" alt="Laravel" class="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-500 ease-out" style="transform-origin: 0% 0%;" />
              </div>
              <div class="p-4 flex flex-col justify-center">
                <h4 class="text-white font-bold text-lg mb-2">Laravel</h4>
                <p class="text-gray-300 text-sm leading-relaxed mb-3">
                  Started using Laravel from version 4.2 and since then I'm hooked up to its ecosystem and all of the community building packages and tools on top of it.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl overflow-hidden hover:bg-gray-800/90 transition-all duration-300 shadow-md hover:shadow-lg group">
            <div class="flex flex-col sm:grid sm:grid-cols-2">
              <div class="bg-gray-800 flex items-center justify-center overflow-hidden h-56 sm:h-auto">
                <img src="/tech/vuejs_train.png" alt="Laravel" class="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-500 ease-out" style="transform-origin: 50% 80%;" />
              </div>
              <div class="p-4 flex flex-col justify-center">
                <h4 class="text-white font-bold text-lg mb-2">Vue.js</h4>
                <p class="text-gray-300 text-sm leading-relaxed mb-3">
                  I was an early adopter of Vue.js, first introduced to it when Taylor Otwell and Jeffrey Way featured it in a Laracasts course—which I thoroughly enjoyed. It's been a long journey, and I still love using it.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl overflow-hidden hover:bg-gray-800/90 transition-all duration-300 shadow-md hover:shadow-lg group">
            <div class="flex flex-col sm:grid sm:grid-cols-2">
              <div class="bg-gray-800 flex items-center justify-center overflow-hidden h-56 sm:h-auto">
                <img src="/tech/tailwindcss.png" alt="TailwindCSS" class="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-500 ease-out" style="transform-origin: 15% 99%;" />
              </div>
              <div class="p-4 flex flex-col justify-center">
                <h4 class="text-white font-bold text-lg mb-2">TailwindCSS</h4>
                <p class="text-gray-300 text-sm leading-relaxed mb-3">
                  I love writing CSS using Tailwind speeding up development.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl overflow-hidden hover:bg-gray-800/90 transition-all duration-300 shadow-md hover:shadow-lg group">
            <div class="flex flex-col sm:grid sm:grid-cols-2">
              <div class="bg-gray-800 flex items-center justify-center overflow-hidden h-56 sm:h-auto">
                <img src="/tech/nuxt.png" alt="Nuxt" class="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-500 ease-out" style="transform-origin: 1% 1%;" />
              </div>
              <div class="p-4 flex flex-col justify-center">
                <h4 class="text-white font-bold text-lg mb-2">Nuxt</h4>
                <p class="text-gray-300 text-sm leading-relaxed mb-3">
                  Nuxt is a great framework on top of Vue.js which helps us build apps faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Techs -->
      <div class="mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-16 hover:h-40">
            <div class="flex items-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
              <img src="/tech/nodejs.svg" alt="Node.js" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Node.js</span>
            </div>
            <div class="absolute inset-0 p-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <p class="text-gray-300 text-xs leading-relaxed">
                Most of my Node.js experience comes from building apps with Nuxt and Webpack. I've also worked a bit with Express.js to build microservices—though those were pretty lightweight in terms of dynamic functionality. For full-blown apps, we've always leaned on Laravel.
              </p>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-16 hover:h-48">
            <div class="flex items-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
              <img src="/tech/mysql.svg" alt="MySQL" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">MySQL</span>
            </div>
            <div class="absolute inset-0 p-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <p class="text-gray-300 text-xs leading-relaxed">
                As I've grown in experience, I've made it a habit to optimize database queries when building features. It's part of our role as devs to get the most out of the server—avoiding unnecessary SQL calls and N+1 issues. Whether through clean Eloquent queries or raw SQL when needed, performance is always a priority, especially for high-traffic endpoints.
              </p>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-16 hover:h-40">
            <div class="flex items-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
              <img src="/tech/typescript.svg" alt="TypeScript" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">TypeScript</span>
            </div>
            <div class="absolute inset-0 p-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <p class="text-gray-300 text-xs leading-relaxed">
                I'm not the biggest fan of TypeScript, but I see it as a way to support frontend devs by making API data easier to work with. Lately, I've been writing more structured frontend code using TypeScript and the Cursor editor, which makes it much easier to create clean abstractions.
              </p>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-16 hover:h-40">
            <div class="flex items-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
              <img src="/tech/ubuntu.svg" alt="Ubuntu" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Ubuntu</span>
            </div>
            <div class="absolute inset-0 p-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <p class="text-gray-300 text-xs leading-relaxed">
                As a tech lead, I'm now also responsible for monitoring downtime—usually the first to get alerts 😅, even in the middle of the night. Haha. It's been a good way to grow my DevOps skills. We mostly manage our own servers, and while serverless can be simpler, I've come to appreciate the hands-on control.
              </p>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-16 hover:h-48">
            <div class="flex items-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
              <img src="/tech/php.svg" alt="PHP" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">PHP</span>
            </div>
            <div class="absolute inset-0 p-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <p class="text-gray-300 text-xs leading-relaxed">
                wasn't my first choice—it just came with the job when I started building e-commerce and content sites using WordPress. I later moved to CodeIgniter for more dynamic apps, but it was Laravel that made me truly enjoy PHP. It brought a fresh take that helped many devs, including me, appreciate the language again.
              </p>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-16 hover:h-40">
            <div class="flex items-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
              <img src="/tech/javascript.svg" alt="JavaScript" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Javascript</span>
            </div>
            <div class="absolute inset-0 p-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <p class="text-gray-300 text-xs leading-relaxed">
                Vue.js was the reason I fell back in love with JavaScript—it pushed me to explore how the language really works. Back then, it was all ES5, and look where we are now! I'm grateful for those early video tutorials on Lynda.com and Envato—they were my building blocks.
              </p>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-16 hover:h-32">
            <div class="flex items-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
              <img src="/tech/vitejs.svg" alt="Vite" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Vite</span>
            </div>
            <div class="absolute inset-0 p-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <p class="text-gray-300 text-xs leading-relaxed">
                Proficient with Vite for fast development and optimized builds. Experienced in configuring build tools, optimizing bundle sizes, and setting up development workflows.
              </p>
            </div>
          </div>
          <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-16 hover:h-40">
            <div class="flex items-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
              <img src="/tech/nginx.svg" alt="Nginx" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Nginx</span>
            </div>
            <div class="absolute inset-0 p-4 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <p class="text-gray-300 text-xs leading-relaxed">
                I'm pretty comfortable working with Nginx—I've set up lots of apps with different configs. Some projects used a mix of Laravel Blade and Nuxt, others were just static images proxied on S3. Whatever the setup or domain-level challenge, I enjoy finding the right solution that fits the use case.
              </p>
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