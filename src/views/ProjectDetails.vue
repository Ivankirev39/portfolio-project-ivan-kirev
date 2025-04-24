<template>
    <section class="min-h-screen !mt-8 p-7">
      <div class="max-w-7xl !mx-auto">
        <div class="flex flex-col md:flex-row overflow-hidden">
   
          <div
            ref="leftRef"
            :class="[
              'md:w-1/2 transition-all duration-700',
              leftVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-24'
            ]"
          >
            <img :src="projectDetail.imageProjects" alt="Project Image" class="w-full h-full object-contain" />
          </div>
  
         
          <div
            ref="rightRef"
            :class="[
              'md:w-1/2 p-10 text-white transition-all duration-700',
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
            ]"
          >
            <h1 class="!text-4xl !font-bold !mb-6"> {{ projectDetail.nameProjects }} </h1>
  
            <div class="!mb-8">
              <p class="text-gray-300 text-lg leading-relaxed">
                {{ projectDetail.descriptionLong }}
              </p>
            </div>
  
            <div class="!mb-8">
              <h2 class="!text-2xl !font-semibold !mb-3">Software Used:</h2>
              <p class="text-gray-300 text-lg">
                {{ projectDetail.usedSoftware }}
              </p>
            </div>
  
            <div>
              <h2 class="!text-2xl !font-semibold !mb-3">Team Members:</h2>
              <p class="text-gray-300 text-lg">
                {{ projectDetail.teamMembers }}
              </p>
            </div>

            <div class="!mt-10">
                <a class="bg-[#5E5E5E] text-white !text-2xl !font-semibold !px-3 !py-3 rounded-full
           transition-all duration-700 ease-in-out transform
           hover:bg-[#4a4a4a] hover:scale-105" :href="projectDetail.projectFull">View Full</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
    <FooterComponent />
  </template>
  
  <script setup>
  import { useProjects } from '../modules/useProjects'
  import { useRoute } from 'vue-router'
  import { ref, onMounted } from 'vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  const { projects } = useProjects()
  const route = useRoute()
  const projectDetail = projects.value.find(p => p.id == route.params.id) || null
  
  const leftRef = ref(null)
  const rightRef = ref(null)
  const leftVisible = ref(false)
  const rightVisible = ref(false)
  
  onMounted(() => {
    const observerOptions = { threshold: 0.1 }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === leftRef.value && entry.isIntersecting) leftVisible.value = true
        if (entry.target === rightRef.value && entry.isIntersecting) rightVisible.value = true
      })
    }, observerOptions)
  
    if (leftRef.value) observer.observe(leftRef.value)
    if (rightRef.value) observer.observe(rightRef.value)
  })
  </script>
  
  <style scoped>
  </style>