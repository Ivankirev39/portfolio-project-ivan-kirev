<template>
 <div class="bg-stone-950">
    <nav class="max-w-screen-4xl flex flex-wrap items-center justify-between mx-auto p-4">
     
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden text-white"
        aria-label="Toggle menu"
      >
        <i class="fas fa-bars"></i>
      </button>
      
     
      <div 
        :class="[
          'w-full md:flex md:w-auto md:order-1',
          isMenuOpen ? 'block' : 'hidden'
        ]"
        class="md:flex md:!space-x-10 md:!ml-18"
      >
        <div class="flex flex-col text-2xl text-[#f4f4f4] md:flex-row md:!space-x-10">
          <RouterLink 
            to="/" 
            class="block py-5 md:py-0 hover:text-stone-400 transition duration-300 ease-in-out transform hover:translate-x-2 md:hover:translate-x-0 md:hover:scale-105 md:active:scale-95"
          >
            About me
          </RouterLink>
          <RouterLink 
            to="/projects" 
            class="block py-4 md:py-0 hover:text-stone-400 transition duration-300 ease-in-out transform hover:translate-x-2 md:hover:translate-x-0 md:hover:scale-105 md:active:scale-95"
          >
            Projects
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="block py-4 md:py-0 hover:text-stone-400 transition duration-300 ease-in-out transform hover:translate-x-2 md:hover:translate-x-0 md:hover:scale-105 md:active:scale-95"
          >
            Contact
          </RouterLink>
        </div>
      </div>

   
      <div 
        :class="[
          'w-full md:flex md:w-auto  md:order-2 text-4xl',
          isMenuOpen ? 'block' : 'hidden'
        ]"
        class="flex justify-center py-1 md:py-0 md:!space-x-10 md:!mr-22"
      >
        <a 
          href="https://www.linkedin.com/in/ivan-dimitrov-kirev-385873361/" 
          class="px-2 hover:text-stone-400 transition duration-300 ease-in-out text-[#f4f4f4] transform hover:translate-x-2 md:hover:translate-x-0 md:hover:scale-110 md:active:scale-95"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a 
          href="https://github.com/Ivankirev39" 
          class="px-2 hover:text-stone-400 transition duration-300 ease-in-out text-[#f4f4f4] transform hover:translate-x-2 md:hover:translate-x-0 md:hover:scale-110 md:active:scale-95"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style>

</style>
