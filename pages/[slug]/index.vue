<template >
  <NuxtLayout>
    <div  class="bg-[#06A4DF] my-0 py-28 bg-opacity-[10%]">
      <div class="container mx-auto">
         <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center gap-8 md:gap-x-10">
             <!-- image section -->
            <div>
              <img :src="product.image" :alt="product.name"  class="w-full h-full" />
            </div>
              <!-- text section -->
            <div class="flex flex-col space-y-10 p-5">
              <h1 class="font-bold text-neutral-900 text-4xl capitalize">{{product.name}}</h1>
              <p class="font-normal text-gray-800 text-2xl" v-html="product.description"></p>
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

const product = products.find((p) => p.name === slug)

useMeta({
  title: `Nas LTD - ${slug}`
})

</script>
<style>
  
</style>