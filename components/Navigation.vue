<template>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
</script>

<style scoped>
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
</style> 