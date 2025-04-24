<template>
  <div>
   
    <section class="relative w-full h-screen overflow-hidden">
      <img src="@/assets/ivan-picture.jpg" alt="Ivan Kirev" class="object-cover w-full h-full" />
      <div class="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>

      <div class="absolute inset-0 flex items-center justify-end z-10 !px-6 sm:px-10 md:px-20">
        <div class="text-white text-right max-w-full">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold !mb-4 sm:mb-6">
            {{ heroTextLarge }}
          </h1>
          <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold !mb-6 sm:mb-10">
            {{ heroTextSmall }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-end items-end sm:items-center">
           
            <a 
    href="#about" 
    class="w-auto sm:w-[280px] md:w-[420px] h-[60px] sm:h-[70px] md:h-[82px] text-lg sm:text-base md:text-xl inline-flex items-center justify-center gap-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300"
    aria-label="Learn more about me"
  >
    LEARN MORE ABOUT ME
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </a>

  <!-- View My Portfolio Button -->
  <router-link to="/projects" aria-label="View my portfolio">
    <button 
      class="w-full sm:w-[260px] md:w-[320px] h-[60px] sm:h-[70px] md:h-[82px] inline-flex items-center justify-center text-lg sm:text-base md:text-xl gap-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300"
    >
      VIEW MY PORTFOLIO
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </router-link>
          </div>
        </div>
      </div>
    </section>

    
    <section id="about" class="px-6 py-16 sm:px-10 md:px-20 md:py-24">
      <IntroductionComponent />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IntroductionComponent from './IntroductionComponent.vue'

const heroTextLarge = ref('Greetings, I’m Ivan Kirev')
const heroTextSmall = ref('Multimedia Design student at EASV')


onMounted(() => {
  console.log('onMounted executed');
  const link = document.querySelector('a[href="#about"]');
  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Link clicked');
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        const yOffset = -20;
        const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  }
});
</script>

<style>

html {
  scroll-behavior: smooth;
}
</style>
