<template>
  <div class="!py-12 !px-6 md:px-12">
    <h2
      ref="titleRef"
      :class="[
        '!text-6xl md:text-3xl text-white !font-bold mb-8 transition-all duration-700',
        titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
      ]"
    >
      My hobbies
    </h2>


    <div
      v-for="(hobby, index) in hobbies"
      :key="hobby.name"
      ref="hobbyRefs"
      :class="[
        'flex flex-col md:flex-row !mt-12 gap-8 transition-all duration-700',
        visible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
      ]"
    >
      <div class="md:w-2/3">
        <h3 class="!text-5xl text-gray-200 !font-semibold !mb-4">{{ hobby.name }}</h3>
        <p class="!text-3xl !mt-17 text-gray-200">
          {{ hobby.description }}
        </p>
      </div>
      <div class="md:w-1/3">
        <img :src="hobby.image" alt="Hobby image" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useHobby } from '@/modules/useHobby';

const { hobbies } = useHobby();

const hobbyRefs = ref([]);
const visible = ref([]);
const titleRef = ref(null);
const titleVisible = ref(false);

onMounted(() => {

  visible.value = hobbies.value.map(() => false);


  const hobbyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = hobbyRefs.value.findIndex((el) => el === entry.target);
        if (entry.isIntersecting && index !== -1) {
          visible.value[index] = true;
        }
      });
    },
    { threshold: 0.1 }
  );

  hobbyRefs.value.forEach((el) => {
    if (el) hobbyObserver.observe(el);
  });

  const titleObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        titleVisible.value = true;
      }
    },
    { threshold: 0.1 }
  );

  if (titleRef.value) titleObserver.observe(titleRef.value);
});
</script>

<style scoped>

</style>
