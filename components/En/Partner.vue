<template >
  <div class="bg-[#06A4DF] my-0 p-10 bg-opacity-[10%]">
    <div class="container mx-auto">
      <!-- title && sub-title section -->
      <div class="flex flex-col items-center space-y-1 my-5 w-full">
        <h1 class="text-4xl font-bold">Our Partner</h1>
        <h3 class="text-2xl text-gray-500 font-normal text-center">
          Our Business Partners that we work honestly together
        </h3>
      </div>

      <!-- partner logo or image section -->
      <div class="mt-10">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2">
          <div class="w-full h-full rounded-md shadow"
          v-for="(pimg, i) in pImages" :key="i">
           <img :src="pimg" alt="">
          </div>
        </div>
      </div>
     </div>
  </div>
</template>
<script setup>

const pImages = ['nas-partner-1.jpeg', 'nas-partner-2.jpeg', 'nas-partner-3.jpeg']

</script>
<style>
  
</style>