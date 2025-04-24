<template>

  <div
    ref="titleRef"
    :class="[
      'transition-all duration-700',
      titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
    ]"
  >
    <h1 class="!text-5xl !font-bold text-white text-center !my-15">Projects done by me</h1>
    <p class="text-white text-sm !text-2xl !font-semibold leading-relaxed !mb-10 text-center">
      {{ pageDescription }}
    </p>
  </div>

  
  <div class="text-white min-h-screen flex flex-col justify-center items-center px-6 py-12">
    <div
      v-for="(project, index) in projects"
      :key="project.nameProjects"
      ref="projectRefs"
      :class="[
        'max-w-4xl w-full transition-all duration-700',
        projectVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
      ]"
    >
      <div class="!mb-12">
       
        <div class="flex items-center justify-between !mb-4">
  <h2 class="!text-4xl sm:!text-3xl sm:!font-bold !font-semibold">{{ project.nameProjects }}</h2>

   <router-link :to="`/project/${project.id}`">
     <h3 class="bg-[#5E5E5E] text-white text-sm !font-bold !px-6 !py-2 rounded-full
           transition-all duration-700 ease-in-out transform
           hover:bg-[#4a4a4a] hover:scale-105">LEARN MORE </h3>
    </router-link>
   </div>

      
        <div class="rounded overflow-hidden shadow-lg">
          <img :src="project.imageProjects" alt="Project image" class="!mx-auto">
        </div>

        
        <p class="text-white text-sm leading-relaxed !font-semibold !text-2xl !mt-4">
          {{ project.descriptionShort }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProjects } from '@/modules/useProjects';
import router from '@/router';

const { projects } = useProjects();

const pageDescription = ref(
  'This page showcases some of the projects I have worked on! They vary from simple light-hearted projects to more complex and serious ones.'
);


const titleRef = ref(null);
const titleVisible = ref(false);
const projectRefs = ref([]);
const projectVisible = ref([]);

onMounted(() => {

  const titleObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) titleVisible.value = true;
    },
    { threshold: 0.1 }
  );
  if (titleRef.value) titleObserver.observe(titleRef.value);


  projectVisible.value = projects.value.map(() => false);

  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.value.findIndex((el) => el === entry.target);
        if (entry.isIntersecting && index !== -1) {
          projectVisible.value[index] = true;
        }
      });
    },
    { threshold: 0.1 }
  );

  projectRefs.value.forEach((el) => {
    if (el) projectObserver.observe(el);
  });
});
</script>

<style scoped>

</style>