<template >
  <div id="arPartner" class="bg-white my-0 p-10 bg-opacity-[6%]">
    <div class="container mx-auto">
      <!-- title && sub-title section -->
      <div class="flex flex-col items-center space-y-1 my-5 w-full">
        <h1 class="text-5xl font-bold">شركائنا</h1>
        <h3 class="text-3xl text-gray-500 font-norma text-center">
          شركاؤنا في العمل أن نعمل معًا بأمانة
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

const pImages = ['/public/partner/partner1.svg','/public/partner/partner2.svg','/public/partner/partner3.svg','/public/partner/partner4.svg','/public/partner/partner5.svg','/public/partner/partner6.svg','/public/partner/partner7.svg']

</script>
<style>
  
</style>