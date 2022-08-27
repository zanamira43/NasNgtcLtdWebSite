<template >
  <div id="kuPartner" class="bg-white my-0 p-10 bg-opacity-[6%]">
    <div class="container mx-auto">
      <!-- title && sub-title section -->
      <div class="flex flex-col items-center space-y-2 my-5 w-full">
        <h1 class="text-5xl font-bold">هاوبەشەکانمان</h1>
        <h3 class="text-3xl text-gray-500 font-norma text-center tracking-wider">
          بەوپەڕی متمانەوە کارلەگەڵ هاوبەشەکانمائەکەین
        </h3>
      </div>

      <!-- partner logo or image section -->
      <div class="mt-10">
        <div class="flex flex-wrap justify-center gap-8 md:gap-x-10 max-w-2xl mx-auto">
          <a href="#" class="p-4 shadow-md rounded-md" v-for="(pimg, i) in pImages" :key="i">
           <img :src="pimg" :alt="pimg" class="w-24 h-24">
          </a>
        </div>
      </div>
     </div>
  </div>
</template>
<script setup>

// const pImages = [
//   '/partner1.svg',
//   '/partner2.svg',
//   '/partner3.svg',
//   '/partner4.svg',
//   '/partner5.svg',
//   '/partner6.svg',
//   '/partner7.svg'
// ]

const pImages = [
  '/partner/partner1.jpeg',
  '/partner/partner2.jpeg',
  '/partner/partner3.jpeg',
  '/partner/partner4.jpeg',
  '/partner/partner5.jpeg',
  '/partner/partner6.jpeg',
  '/partner/partner7.jpeg',

]

</script>
<style>
  
</style>