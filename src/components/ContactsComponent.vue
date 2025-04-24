<template>
    <section class="text-white min-h-screen flex flex-col items-center justify-center !p-4">
      
      <div
        ref="headerRef"
        :class="[
          'transition-all duration-700',
          headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
        ]"
        class="!max-w-md w-full"
      >
        <h1 class="!text-8xl !font-bold text-center !mb-8">Contact</h1>
        <p class="text-center !text-xl !mb-12">
          Want to work with me? Here are the different ways you can contact me! I look forward to collaborating with you!
        </p>
      </div>
  
     
      <div class="!space-y-10 !max-w-md w-full">
        <div
          v-for="(item, index) in contactItems"
          :key="item.label"
          ref="itemRefs"
          :class="[
            'flex flex-col items-center transition-all duration-700',
            itemVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <h2 class="!text-3xl !font-bold !mb-4">{{ item.label }}</h2>
          <p class="text-gray-300 !text-xl" v-if="!item.link">{{ item.value }}</p>
          <a
            v-else
            :href="item.link"
            target="_blank"
            class="text-blue-400 !text-xl !hover:underline"
          >
            {{ item.value }}
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const headerRef = ref(null)
  const itemRefs = ref([])
  const headerVisible = ref(false)
  const itemVisible = ref([])
  
  const contactItems = [
    { label: 'E-mail', value: 'ivankirev31@gmail.com' },
    { label: 'Mobile', value: '+45 91 43 89 80' },
    { label: 'GitHub', value: '@Ivankirev39', link: 'https://github.com/Ivankirev39' },
    { label: 'LinkedIn', value: 'Ivan Dimitrov Kirev', link: 'https://www.linkedin.com/in/ivan-dimitrov-kirev-385873361/' }
  ]
  
  onMounted(() => {
   
    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) headerVisible.value = true
    }, { threshold: 0.1 })
    if (headerRef.value) headerObserver.observe(headerRef.value)
  
    
    itemVisible.value = contactItems.map(() => false)
    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = itemRefs.value.findIndex(el => el === entry.target)
        if (entry.isIntersecting && index !== -1) {
          itemVisible.value[index] = true
        }
      })
    }, { threshold: 0.1 })
  
    itemRefs.value.forEach(el => {
      if (el) itemObserver.observe(el)
    })
  })
  </script>
  
  <style scoped>
  </style>
  