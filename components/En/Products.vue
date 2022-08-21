<template >
  <div name="product" class="bg-[#06A4DF] my-0 p-10 bg-opacity-[10%]">
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
        <div class="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
          <div v-for="product in products" :key="product.id">
             <div class="w-full h-[90%]">
               <NuxtLink :to="`/${product.name}`">
                <img :src="product.image" :alt="product.name" class="w-full h-full" />
               </NuxtLink> 
             </div>
             <div class="flex flex-col items-center py-2">
              <p class="font-medium text-lg text-gray-800 capitalize">{{product.name}}</p>
             </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>
<script setup>
import products from '@/data/english.json'

</script>
<style>
  
</style>