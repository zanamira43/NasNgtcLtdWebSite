<template >
  <div class="bg-white my-0 p-10 bg-opacity-[6%]">
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

  {img: 'nas-partner-1.jpeg',  title: 'المنتج الأول'}, 
  {img: 'nas-partner-2.jpeg',  title: 'المنتج الثاني'}, 
  {img: 'nas-partner-3.jpeg',  title: 'المنتج الثالث'},
  {img: 'nas-partner-1.jpeg',  title: 'المنتج الرابع'}, 
  {img: 'nas-partner-2.jpeg',  title: 'المنتج الخامس'}, 
  {img: 'nas-partner-3.jpeg',  title: 'المنتج السادس'},
]




</script>
<style>
  
</style>