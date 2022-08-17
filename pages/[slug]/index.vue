<template >
  <NuxtLayout>
    <div  class="bg-[#06A4DF] my-0 py-28 bg-opacity-[10%]">
      <div class="container mx-auto">
         <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center gap-8 md:gap-x-10 mx-auto">
             <!-- image section -->
            <div class="rounded-lg shadow-lg">
              <img :src="product.image" :alt="product.name"  class="w-auto h-auto"/>
            </div>
              <!-- text section -->
            <div class="flex flex-col space-y-10 p-5">
              <h1 class="font-bold text-neutral-900 text-4xl">{{product.name}}</h1>
              <p class="font-normal text-gray-500 text-lg leading-8">{{product.description}}</p>
            </div>
         </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import products from '@/data/english.json'

const route = useRoute()
const slug = route.params.slug

const product = products.find((p: any) => p.name === slug)


</script>
<style>
  
</style>