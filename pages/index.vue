<template>
  <div class="min-h-screen bg-black relative overflow-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2 transition-all duration-500 cursor-pointer hover:scale-105" :class="{ 'opacity-100 translate-x-0': showNav, 'opacity-0 -translate-x-full': !showNav }" @click="scrollToTop">
            <div class="w-8 h-8 flex items-center justify-center">
              <img src="/waving-hand.svg" alt="Harley's Avatar" class="w-full h-full object-cover waving-hand" />
            </div>
            <span class="text-white font-bold text-xl">Harley</span>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="text-gray-300 hover:text-emerald-400 transition-colors font-medium">About</a>
            <a href="#experience" class="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Experience</a>
            <a href="#tech-stack" class="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Tech Stack</a>
            <a href="#community" class="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Community</a>
            <a href="#contact" class="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Contact</a>
          </div>

          <!-- Mobile Hamburger Button -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            :class="{ 'text-emerald-400': mobileMenuOpen, 'text-gray-300': !mobileMenuOpen }"
          >
            <span 
              class="w-6 h-0.5 bg-current transition-all duration-300"
              :class="{ 'rotate-45 translate-y-2': mobileMenuOpen, 'rotate-0 translate-y-0': !mobileMenuOpen }"
            ></span>
            <span 
              class="w-6 h-0.5 bg-current transition-all duration-300"
              :class="{ 'opacity-0': mobileMenuOpen, 'opacity-100': !mobileMenuOpen }"
            ></span>
            <span 
              class="w-6 h-0.5 bg-current transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-2': mobileMenuOpen, 'rotate-0 translate-y-0': !mobileMenuOpen }"
            ></span>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div 
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          :class="{ 'max-h-96 opacity-100': mobileMenuOpen, 'max-h-0 opacity-0': !mobileMenuOpen }"
        >
          <div class="py-4 space-y-3 border-t border-gray-700">
            <a 
              href="#about" 
              class="block text-gray-300 hover:text-emerald-400 transition-colors font-medium text-base text-center py-2"
              @click="closeMobileMenu"
            >
              About
            </a>
            <a 
              href="#experience" 
              class="block text-gray-300 hover:text-emerald-400 transition-colors font-medium text-base text-center py-2"
              @click="closeMobileMenu"
            >
              Experience
            </a>
            <a 
              href="#tech-stack" 
              class="block text-gray-300 hover:text-emerald-400 transition-colors font-medium text-base text-center py-2"
              @click="closeMobileMenu"
            >
              Tech Stack
            </a>
            <a 
              href="#community" 
              class="block text-gray-300 hover:text-emerald-400 transition-colors font-medium text-base text-center py-2"
              @click="closeMobileMenu"
            >
              Community
            </a>
            <a 
              href="#contact" 
              class="block text-gray-300 hover:text-emerald-400 transition-colors font-medium text-base text-center py-2"
              @click="closeMobileMenu"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <Hero />

    <!-- Tech Stack Section -->
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
              <div class="grid grid-cols-2">
                <div class="bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center overflow-hidden">
                  <img src="/tech/laravel.png" alt="Laravel" class="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-500 ease-out" style="transform-origin: 0% 0%;" />
                </div>
                <div class="p-4 flex flex-col justify-center">
                  <h4 class="text-white font-bold text-lg mb-2">Laravel</h4>
                  <p class="text-gray-300 text-sm leading-relaxed mb-3">
                    I have vast experience with Laravel, including Inertia, Livewire, Nova, and Filament.
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-800/70 rounded-2xl overflow-hidden hover:bg-gray-800/90 transition-all duration-300 shadow-md hover:shadow-lg group">
              <div class="grid grid-cols-2">
                <div class="bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center overflow-hidden">
                  <img src="/tech/vuejs_train.png" alt="Laravel" class="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-500 ease-out" style="transform-origin: 50% 80%;" />
                </div>
                <div class="p-4 flex flex-col justify-center">
                  <h4 class="text-white font-bold text-lg mb-2">Vue.js</h4>
                  <p class="text-gray-300 text-sm leading-relaxed mb-3">
                    I have vast experience with Laravel, including Inertia, Livewire, Nova, and Filament.
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-800/70 rounded-2xl overflow-hidden hover:bg-gray-800/90 transition-all duration-300 shadow-md hover:shadow-lg group">
              <div class="grid grid-cols-2">
                <div class="bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center overflow-hidden">
                  <img src="/tech/tailwindcss.png" alt="TailwindCSS" class="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-500 ease-out" style="transform-origin: 15% 99%;" />
                </div>
                <div class="p-4 flex flex-col justify-center">
                  <h4 class="text-white font-bold text-lg mb-2">TailwindCSS</h4>
                  <p class="text-gray-300 text-sm leading-relaxed mb-3">
                    I have vast experience with Laravel, including Inertia, Livewire, Nova, and Filament.
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-800/70 rounded-2xl overflow-hidden hover:bg-gray-800/90 transition-all duration-300 shadow-md hover:shadow-lg group">
              <div class="grid grid-cols-2">
                <div class="bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center overflow-hidden">
                  <img src="/tech/nuxt.png" alt="Nuxt" class="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-500 ease-out" style="transform-origin: 1% 1%;" />
                </div>
                <div class="p-4 flex flex-col justify-center">
                  <h4 class="text-white font-bold text-lg mb-2">Nuxt</h4>
                  <p class="text-gray-300 text-sm leading-relaxed mb-3">
                    I have vast experience with Laravel, including Inertia, Livewire, Nova, and Filament.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Techs -->
        <div class="mb-12">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-shadow">
              <img src="/tech/nodejs.svg" alt="Node.js" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Node.js</span>
            </div>
            <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-shadow">
              <img src="/tech/mysql.svg" alt="MySQL" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">MySQL</span>
            </div>
            <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-shadow">
              <img src="/tech/typescript.svg" alt="TypeScript" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">TypeScript</span>
            </div>
            <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-shadow">
              <img src="/tech/ubuntu.svg" alt="Ubuntu" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Ubuntu</span>
            </div>
            <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-shadow">
              <img src="/tech/php.svg" alt="Ubuntu" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">PHP</span>
            </div>
            <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-shadow">
              <img src="/tech/javascript.svg" alt="Ubuntu" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Javascript</span>
            </div>
            <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-shadow">
              <img src="/tech/vitejs.svg" alt="Ubuntu" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Vite</span>
            </div>
            <div class="bg-gray-800/70 rounded-2xl p-4 flex items-center shadow-md hover:bg-gray-800/90 hover:shadow-lg transition-shadow">
              <img src="/tech/nginx.svg" alt="Ubuntu" class="w-8 h-8 mr-4" />
              <span class="text-white font-bold text-lg">Nginx</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
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
            <div class="flex space-x-6">
              <div class="flex items-center space-x-2 text-emerald-400">
                <Icon icon="pixelarticons:target" class="text-2xl" />
                <span class="font-medium">Backend Expert</span>
              </div>
              <div class="flex items-center space-x-2 text-teal-400">
                <Icon icon="pixelarticons:rocket" class="text-2xl" />
                <span class="font-medium">Pressure Handler</span>
              </div>
            </div>
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

    <!-- Experience Section -->
    <section id="experience" class="py-20 px-2 sm:px-4 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Experience</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        </div>
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-emerald-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 pulsating-dot"></div>
            <time class="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 - Present</time>
            <div class="bg-gray-800/70 p-2 sm:p-4 rounded-lg my-4 flex items-center px-4 sm:px-8 space-x-4 sm:space-x-8 transition-colors duration-300 hover:bg-gray-800">
              <div class="bg-gray-300/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src="/company/bitterbrains.png" class="w-10 h-10 sm:w-16 sm:h-16 object-contain" alt="BitterBrains Logo">
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-2">
                  <div class="flex items-center">
                    <h3 class="text-base sm:text-lg font-semibold text-white">BitterBrains</h3>
                  </div>
                  <p class="text-emerald-400 font-medium mb-1 text-sm sm:text-base">Technical Lead Engineer</p>
                </div>
                <p class="text-gray-500 text-xs sm:text-sm font-medium mb-1">Powering Developer Growth Across the JavaScript Ecosystem</p>
              </div>
            </div>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep 2018 - Mar 2020</time>
            <div class="bg-gray-800/70 p-2 sm:p-4 rounded-lg my-4 flex items-center px-4 sm:px-8 space-x-4 sm:space-x-8 transition-colors duration-300 hover:bg-gray-800">
              <div class="bg-gray-300/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src="/company/prophetx.jpeg" class="w-10 h-10 sm:w-16 sm:h-16 object-contain" alt="Prophet Logo">
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-2">
                  <div class="flex items-center">
                    <h3 class="text-base sm:text-lg font-semibold text-white">Prophet</h3>
                  </div>
                  <p class="text-emerald-400 font-medium mb-1 text-sm sm:text-base">Engineering Lead</p>
                </div>
                <p class="text-gray-500 text-xs sm:text-sm font-medium mb-1">The National Sports Exchange</p>
              </div>
            </div>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2018 - Sep 2018</time>
            <div class="bg-gray-800/70 p-2 sm:p-4 rounded-lg my-4 flex items-center px-4 sm:px-8 space-x-4 sm:space-x-8 transition-colors duration-300 hover:bg-gray-800">
              <div class="bg-gray-300/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src="/company/aversafe.jpeg" class="w-10 h-10 sm:w-16 sm:h-16 object-contain" alt="Aversafe Logo">
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-2">
                  <div class="flex items-center">
                    <h3 class="text-base sm:text-lg font-semibold text-white">Aversafe</h3>
                  </div>
                  <p class="text-emerald-400 font-medium mb-1 text-sm sm:text-base">Engineering Lead</p>
                </div>
                <p class="text-gray-500 text-xs sm:text-sm font-medium mb-1">Credential Verification for the World</p>
              </div>
            </div>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2016 - Jan 2018</time>
            <div class="bg-gray-800/70 p-2 sm:p-4 rounded-lg my-4 flex items-center px-4 sm:px-8 space-x-4 sm:space-x-8 transition-colors duration-300 hover:bg-gray-800">
              <div class="bg-gray-300/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src="/company/rallyhr.webp" class="w-10 h-10 sm:w-16 sm:h-16 object-contain" alt="RallyHR Logo">
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-2">
                  <div class="flex items-center">
                    <h3 class="text-base sm:text-lg font-semibold text-white">RallyHR</h3>
                  </div>
                  <p class="text-emerald-400 font-medium mb-1 text-sm sm:text-base">Engineering Lead</p>
                </div>
                <p class="text-gray-500 text-xs sm:text-sm font-medium mb-1">Innovative solution to Human resources</p>
              </div>
            </div>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct 2015 - Sep 2016</time>
            <div class="bg-gray-800/70 p-2 sm:p-4 rounded-lg my-4 flex items-center px-4 sm:px-8 space-x-4 sm:space-x-8 transition-colors duration-300 hover:bg-gray-800">
              <div class="bg-gray-300/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src="/company/idearobin.jpeg" class="w-10 h-10 sm:w-16 sm:h-16 object-contain" alt="IdeaRobin Logo">
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-2">
                  <div class="flex items-center">
                    <h3 class="text-base sm:text-lg font-semibold text-white">IdeaRobin</h3>
                  </div>
                  <p class="text-emerald-400 font-medium mb-1 text-sm sm:text-base">Software Engineer</p>
                </div>
                <p class="text-gray-500 text-xs sm:text-sm font-medium mb-1">Transforming your ideas into meaningful digital experience</p>
              </div>
            </div>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2015 - Sep 2015</time>
            <div class="bg-gray-800/70 p-2 sm:p-4 rounded-lg my-4 flex items-center px-4 sm:px-8 space-x-4 sm:space-x-8 transition-colors duration-300 hover:bg-gray-800">
              <div class="bg-gray-300/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src="/company/lancera.jpeg" class="w-10 h-10 sm:w-16 sm:h-16 object-contain" alt="Lancera Logo">
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-2">
                  <div class="flex items-center">
                    <h3 class="text-base sm:text-lg font-semibold text-white">Lancera</h3>
                  </div>
                  <p class="text-emerald-400 font-medium mb-1 text-sm sm:text-base">PHP Developer</p>
                </div>
                <p class="text-gray-500 text-xs sm:text-sm font-medium mb-1">IT Services and IT Consulting</p>
              </div>
            </div>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov 2014 - May 2015</time>
            <div class="bg-gray-800/70 p-2 sm:p-4 rounded-lg my-4 flex items-center px-4 sm:px-8 space-x-4 sm:space-x-8 transition-colors duration-300 hover:bg-gray-800">
              <div class="bg-gray-300/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src="/company/cleverlocal.png" class="w-10 h-10 sm:w-16 sm:h-16 object-contain" alt="Cleverlocal Logo">
              </div>
              <div class="min-w-0 flex-1">
                <div class="mb-2">
                  <div class="flex items-center">
                    <h3 class="text-base sm:text-lg font-semibold text-white">Mango Interactive</h3>
                  </div>
                  <p class="text-emerald-400 font-medium mb-1 text-sm sm:text-base">Web Developer</p>
                </div>
                <p class="text-gray-500 text-xs sm:text-sm font-medium mb-1">E-commerce IT services</p>
              </div>
            </div>
          </li>
        </ol>
        
        <!-- Learn More Button -->
        <div class="text-center mt-12">
          <a 
            href="https://linkedin.com/in/harlequindoyon" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold text-base hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
            Learn More About My Experience
          </a>
        </div>
      </div>
    </section>

    <!-- Community Involvement Section -->
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

    <!-- Contact Section -->
    <section id="contact" class="py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-2xl mx-auto text-center">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-white mb-3">Let's Work Together</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-4 rounded-full"></div>
          <p class="text-gray-300 text-base leading-relaxed">Ready to bring your ideas to life? I'd love to chat about your project!</p>
        </div>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <a href="mailto:hello@harlekoy.dev" class="flex items-center space-x-3 hover:text-emerald-400 transition-colors">
            <Icon icon="pixelarticons:mail" class="text-emerald-400 text-xl" />
            <span class="text-gray-300">hello@harlekoy.dev</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-gray-400">
          © {{ currentYear }} Harley. Crafted with ❤️ and lots of 🍺
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Hero from '@/components/Hero.vue'

// Set page title
useHead({
  title: 'Harlequin Doyon | Full-stack developer'
})

// Navigation visibility state
const showNav = ref(false)

// Mobile menu state
const mobileMenuOpen = ref(false)

// Scroll event handler
const handleScroll = () => {
  const heroSection = document.querySelector('section')
  if (heroSection) {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
    showNav.value = window.scrollY > heroBottom * 0.8 // Show nav when 80% past hero
  }
}

// Add smooth scrolling for navigation links
onMounted(() => {
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
  
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})

onUnmounted(() => {
  // Remove scroll event listener
  window.removeEventListener('scroll', handleScroll)
})

// Function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Function to toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Function to close mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

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

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(20deg); }
  20% { transform: rotate(-10deg); }
  30% { transform: rotate(20deg); }
  40% { transform: rotate(-5deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
.waving-hand {
  animation: wave 1.5s ease-in-out infinite;
  transform-origin: 70% 70%;
  animation-delay: 0s;
}

@keyframes dot-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
}
.pulsating-dot {
  animation: dot-pulse 1.5s infinite;
}
</style>