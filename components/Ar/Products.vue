<template >
  <div id="arProduct" class="bg-[#06A4DF] my-0 p-10 bg-opacity-[20%] h-auto">
    <div class="container mx-auto">
      <!-- title && sub-title section -->
      <div class="flex flex-col items-center space-y-1 my-5 w-full">
        <h1 class="text-4xl font-bold">
          منتجات الشركة
        </h1>
        <h3 class="md:text-3xl lg:text-3xl text-2xl text-gray-500 font-normal">
          منتجاتنا بأفضل جودة للعملاء
        </h3>
      </div>

      <!-- partner logo or image section -->
      <div class="mt-10">
        <div class="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-3">
          <div v-for="product in products" :key="product.id" class="mt-5">
             <div class="w-full h-auto">
              <NuxtLink :to="`/arabic/${product.name}`">
                <img :src="product.image" :alt="product.name" class="w-full h-[250px]" />
              </NuxtLink>
             </div>
             <div class="flex flex-col items-center py-3">
              <p class="font-bold text-xl text-gray-800">{{product.name}}</p>
             </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>
<script setup>
import products from '@/data/arabicData.json'

</script>
<style>
  
</style>