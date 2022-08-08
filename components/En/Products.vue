<template >
  <div class="bg-white my-0 p-10 bg-opacity-[6%]">
    <div class="container mx-auto">
      <!-- title && sub-title section -->
      <div class="flex flex-col items-center space-y-1 my-5 w-full">
        <h1 class="text-4xl font-bold">
          Company Products
        </h1>
        <h3 class="md:text-3xl lg:text-3xl text-2xl text-gray-500 font-normal text-center">
          Our Products in Best Quality For Customers
        </h3>
      </div>

      <!-- partner logo or image section -->
      <div class="mt-10">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3">
          <div class="w-full h-full rounded-md shadow bg-gray-50"
             v-for="(pimg, i) in pImages" :key="i">
             <div>
                <img :src="pimg.img" alt="" />
             </div>
             <div class="flex flex-col items-center py-2 bg-gray-50">
              <p class="font-medium text-lg text-gray-500">{{pimg.title}}</p>
             </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>
<script setup>

const pImages = [

  {img: '/nas-partner-1.jpeg',  title: 'product one'}, 
  {img: '/nas-partner-2.jpeg',  title: 'product two'}, 
  {img: '/nas-partner-3.jpeg',  title: 'product three'},
  {img: '/nas-partner-1.jpeg',  title: 'product four'}, 
  {img: '/nas-partner-2.jpeg',  title: 'product five'}, 
  {img: '/nas-partner-3.jpeg',  title: 'product six'},
]


</script>
<style>
  
</style>