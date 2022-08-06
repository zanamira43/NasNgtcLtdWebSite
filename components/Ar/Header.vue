<template>
  <div class="container mx-auto">
    <div class="border w-full h-[500px] bg-black relative overflow-auto">
      <!-- hader section image background -->
      <img src="img-background.jpeg" alt="header-image" 
        class="w-full h-full items-center opacity-25 absolute" />

        <!-- navbar section -->
        <div class="flex justify-between mx-10 my-10">
            <!-- logo images -->
            <div class="w-[150px] h-[150px]">
              <img src="ngtc-logo.jpeg" alt="" class="rounded-full">
            </div>

            <!-- menu link-->
            <div class="text-white z-10 bg-[#06A4DF] opacity-[60%] mt-10
             h-10 rounded-md">
              <ul class="flex items-center">
                <li v-for="(menuItem, i) in menuItems" :key="i"
                 class="px-5 py-2 border border-white"
                 :class="{'bg-white text-[#06A4DF]': activeLink == menuItem.title}">
                  <NuxtLink :to="menuItem.link" class="font-normal">{{menuItem.title}}</NuxtLink>
                </li>
              </ul>
            </div>

            <!-- change language icon link -->
            <div class="text-white z-10 mt-10 h-10">
               <a href="/"><h3 class="px-3 py-2 text-md font-mono">En</h3></a>
            </div>
        </div>

          <!-- Title && SubTitle Section -->
        <div class="text-white mt-[80px] mx-4 items-center grid">
          <div class="grid-cols-1 gap-1 mx-auto w-5/2">
              <h1 class="md:text-4xl lg:text-5xl text-2xl font-bold">
              Nas General Trading Company
            </h1>
            <h2 class="lg:text-3xl md:text-2xl text-xl font-medium mt-1">
              One-Stope Supperler For Multi-Products On the Globle Scale
            </h2>
          </div>
          
        </div>

      </div>
    </div>

</template>
<script setup>



const menuItems = ref([
  {title: 'Home', link: '#'},
  {title: 'About', link: '#'},
  {title: 'Partner', link: '#'},
  {title: 'Product', link: '#'},
  {title: 'Contact', link: '#'},
])

const activeLink = useState('activeLink' ,() => 'Home' )

</script>
<style>
  
</style>