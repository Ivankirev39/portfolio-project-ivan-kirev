<template>
  <div
    ref="sectionRef"
    :class="[
      'flex flex-col md:flex-row py-12 !px-1 md:px-12 gap-8 transition-all duration-700',
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
    ]"
  >
    <div class="md:w-2/3">
      <h2 class="!text-6xl !mb-8 md:text-3xl !font-bold text-white">{{ introHeader }}</h2>
      <p class="!mb-15 text-2xl text-white">{{ introText }}</p>
      <a class="bg-[#5E5E5E] text-white text-2xl !font-semibold !px-8 !py-4 rounded-full
         transition-all duration-700 ease-in-out transform
         hover:bg-[#4a4a4a] hover:scale-105" href="https://assets.adobe.com/id/urn:aaid:sc:US:865181a2-30b8-4599-927d-8728b48e705c?view=published">View my CV</a>
    </div>

    <div class="md:w-1/3 p-6 flex items-center justify-center">
      <div class="w-full aspect-video">
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/v0t3ub183JM?si=4-J6QX_Swddq0S_G"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>

  
  
  </div>

 


</template>

<script setup>
import { ref, onMounted } from 'vue';

let introHeader = ref('Who am I?');
let introText = ref(
  "My name is Ivan Kirev, born and raised in Blagoevgrad, Bulgaria. After finishing high school, I pursued university education in Denmark's Multimedia Design program. The atmosphere captivated me, and I appreciated Denmark's approach to teaching. Throughout my life, my passion for video games and animation has fueled my desire to become a multimedia designer. When I'm not gaming, I dedicate my free time to studying and language learning—I’m committed to improvement and professional development. I pride myself on being exceptionally driven to learn and achieve my goals. I’m also punctual, consistently meeting deadlines and maintaining organization."
);

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.1 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<style scoped>

</style>
