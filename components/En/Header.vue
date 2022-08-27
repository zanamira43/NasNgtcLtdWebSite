<template>
  <header>
    <div class="border w-full h-[500px] bg-black relative overflow-auto">

      <!-- menu panel for mobile version -->
      <div class="text-white top-0 left-0 w-full px-5 py-5 z-40 overflow-hidden absolute
      bg-black opacity-90 h-full md:hidden lg:hidden items-center" :class="`${openMenu ? 'flex flex-col': 'hidden'}`">
       <button @click="openMenu = false" class="text-left text-2xl">X</button>
        <ul class="flex flex-col items-center w-full mt-10">
            <li v-for="(menuItem, i) in menuItems" :key="i"
            class="px-5 py-5 hover:bg-gray-500 hover:text-white hover:rounded-md"
            :class="{'bg-gray-800 rounded-md': activeLink === menuItem.title}">
              <a :href="menuItem.link" @click="activeLink= menuItem.title" class="font-normal">{{menuItem.title}}</a>
            </li>
        </ul>
      </div>

      <!-- hader section image background -->
      <img src="/img-background.jpeg" alt="header-image" 
        class="w-full h-full items-center opacity-30 absolute" />

      <div class="container mx-auto">  
        <!-- navbar section -->
        <div class="flex justify-between items-start mx-10 my-10">
            <!-- logo images -->
            <div class="md:w-[150px] md:h-[150px] lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] z-10">
              <NuxtLink to="/">
                <img src="/ngtc-logo.jpeg" alt="" class="rounded-full" />
              </NuxtLink>
              
            </div>

            <!-- menu link-->
            <div class="hidden lg:block md:flex">
              <div class="text-white z-10 bg-[#06A4DF] opacity-[60%] mt-10
                    h-10 rounded-md">
                <ul class="flex items-center">
                  <li v-for="(menuItem, i) in menuItems" :key="i"
                  class="px-5 py-2 hover:bg-gray-200 hover:text-[#06A4DF]"
                  :class="`${activeLink === menuItem.title ? 'bg-white text-[#06A4DF]' : ''}`">
                    <a :href="menuItem.link" @click="activeLink= menuItem.title" class="font-normal">{{menuItem.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
           

            <!-- change language icon link -->
            <div class="block z-10 mt-10">
              <button class="text-2xl font-bold  text-white" @click="langMenu = !langMenu">
                <i class="fas fa-language"></i></button>
              <div class="-translate-x-3 flex flex-col items-center space-y-3 text-center text-white"
              v-if="langMenu">
                <NuxtLink to="/arabic"><h3 class="font-mono">Arabic</h3></NuxtLink>
                <NuxtLink to="/kurdish"><h3 class="font-mono">Kurdish</h3></NuxtLink>
              </div>
            </div>
          
             <!-- menu icon for mobile version -->
            <div class="lg:hidden md:hidden mt-10 z-10 flex flex-col items-center relative">
              <button class="text-white text-2xl"
                          @click="openMenu = !openMenu">
                  <i class="fas fa-bars"></i>
              </button>
            </div>
        </div>
        <!-- end of navbar section -->
        
          <!-- Title && SubTitle Section -->
        <div class="text-white mt-20 lg:mt-[80px] md:mt-[80px] mx-4 items-center grid">
          <div class="grid-cols-1 gap-1 mx-auto w-5/2">
              <h1 class="md:text-4xl lg:text-4xl text-2xl font-bold text-center">
              Nas General Trading Company Ltd
            </h1>
            <h2 class="lg:text-3xl md:text-3xl text-md font-medium mt-2">
             One-Stope Supperler For Multi-Products On a Globle Scale 
            </h2>
          </div>
          
        </div>
      </div>
      </div>
  </header>

</template>
<script setup>

const menuItems = ref([
  {title: 'Home', link: '/'},
  {title: 'About', link: '/#about'},
  {title: 'Product', link: '/#product'},
  {title: 'Partner', link: '/#partner'},
  {title: 'Contact', link: '/#contact'},
])

const activeLink = useState('activeLink' ,() => 'Home' )

const openMenu = ref(false)
const langMenu = ref(false)

// const activeLink = ref('Home')



</script>
<style>
</style>