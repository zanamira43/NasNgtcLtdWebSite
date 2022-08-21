<template >
  <div name="partner" class="bg-white my-0 p-10 bg-opacity-[6%]">
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
        <div class="flex flex-wrap justify-center gap-8 md:gap-x-10 max-w-2xl mx-auto">
          <a href="/" class="p-4 shadow-md rounded-md" v-for="(pimg, i) in pImages" :key="i">
           <img :src="pimg" :alt="pimg" class="w-24 h-24">
          </a>
        </div>
      </div>
     </div>
  </div>
</template>
<script setup>

const pImages = ['partner/partner1.svg','partner/partner2.svg','partner/partner3.svg','partner/partner4.svg','partner/partner5.svg','partner/partner6.svg','partner/partner7.svg',]

</script>
<style>
  
</style>