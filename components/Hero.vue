<template>
  <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Avatar - Top on mobile, Right on desktop -->
        <div class="flex justify-center md:justify-end order-1 md:order-2">
          <div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-xl overflow-hidden relative group perspective-1000">
            <div class="w-full h-full rounded-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              <!-- Front side -->
              <img src="/avatar.png" alt="Harley's Avatar" class="w-full h-full object-cover rounded-full absolute inset-0 backface-hidden" />
              <!-- Back side -->
              <img src="/harley.jpg" alt="Harley's Photo" class="w-full h-full object-cover rounded-full absolute inset-0 backface-hidden rotate-y-180" />
            </div>
          </div>
        </div>
        
        <!-- Text Content - Bottom on mobile, Left on desktop -->
        <div class="text-left order-2 md:order-1">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span class="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">{{ currentName }}</span><span class="cursor-blink">|</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            I'm a Full-stack developer who loves making apps come alive with Laravel and Vue.js. I thrive under pressure and love turning ideas into interactive experiences.
          </p>
          <div class="flex gap-4">
            <a href="https://linkedin.com/in/harlequindoyon" target="_blank" rel="noopener noreferrer">
              <Icon name="fa6-brands:linkedin" class="text-emerald-400 hover:text-white text-2xl transition-colors duration-200" />
            </a>
            <a href="https://github.com/harlekoy" target="_blank" rel="noopener noreferrer">
              <Icon name="fa6-brands:github" class="text-emerald-400 hover:text-white text-2xl transition-colors duration-200" />
            </a>
            <a href="https://x.com/harlequindoyon" target="_blank" rel="noopener noreferrer">
              <Icon name="fa6-brands:x-twitter" class="text-emerald-400 hover:text-white text-2xl transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Name animation logic
const names = ['Harley', 'Harlequin']
const currentNameIndex = ref(0)
const currentName = ref('')
let typingInterval

const typeText = (text, callback) => {
  let index = 0
  currentName.value = '' // Clear the name before starting to type
  
  typingInterval = setInterval(() => {
    if (index < text.length) {
      currentName.value += text[index]
      index++
    } else {
      clearInterval(typingInterval)
      setTimeout(callback, 2000) // Wait 2 seconds before starting next transition
    }
  }, 100) // Type each character every 100ms
}

const morphText = (fromText, toText, callback) => {
  // Find the common prefix
  let commonPrefix = ''
  for (let i = 0; i < Math.min(fromText.length, toText.length); i++) {
    if (fromText[i] === toText[i]) {
      commonPrefix += fromText[i]
    } else {
      break
    }
  }
  
  // If toText is longer, we need to add characters
  if (toText.length > fromText.length) {
    // Start with the common prefix
    currentName.value = commonPrefix
    
    // Add the remaining characters from toText
    let index = commonPrefix.length
    typingInterval = setInterval(() => {
      if (index < toText.length) {
        currentName.value += toText[index]
        index++
      } else {
        clearInterval(typingInterval)
        setTimeout(callback, 2000)
      }
    }, 100)
  } else if (toText.length < fromText.length) {
    // We need to delete characters first, then add new ones
    let currentIndex = fromText.length
    
    // Delete characters until we reach the common prefix
    typingInterval = setInterval(() => {
      if (currentIndex > commonPrefix.length) {
        currentName.value = currentName.value.slice(0, -1)
        currentIndex--
      } else {
        clearInterval(typingInterval)
        
        // Now add the remaining characters from toText
        let addIndex = commonPrefix.length
        typingInterval = setInterval(() => {
          if (addIndex < toText.length) {
            currentName.value += toText[addIndex]
            addIndex++
          } else {
            clearInterval(typingInterval)
            setTimeout(callback, 2000)
          }
        }, 100)
      }
    }, 50)
  } else {
    // Same length but different characters - replace character by character
    let index = commonPrefix.length
    typingInterval = setInterval(() => {
      if (index < toText.length) {
        currentName.value = commonPrefix + toText.slice(commonPrefix.length, index + 1)
        index++
      } else {
        clearInterval(typingInterval)
        setTimeout(callback, 2000)
      }
    }, 100)
  }
}

const cycleNames = () => {
  const animateNextName = () => {
    const currentText = names[currentNameIndex.value]
    currentNameIndex.value = (currentNameIndex.value + 1) % names.length
    const nextName = names[currentNameIndex.value]
    
    morphText(currentText, nextName, () => {
      animateNextName()
    })
  }
  
  // Start with the first name
  typeText(names[0], () => {
    animateNextName()
  })
}

onMounted(() => {
  // Start name animation
  cycleNames()
})

onUnmounted(() => {
  if (typingInterval) {
    clearInterval(typingInterval)
  }
})
</script>

<style scoped>
/* Custom blinking cursor animation */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.cursor-blink {
  animation: blink 1s infinite;
  color: #fff;
  font-weight: bold;
}

/* 3D Flip Animation */
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.group:hover .group-hover\:rotate-y-180 {
  transform: rotateY(180deg);
}
</style> 