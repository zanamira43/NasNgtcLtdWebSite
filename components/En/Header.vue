<template>
  <div>
    <div class="border w-full h-[500px] bg-black relative overflow-auto">
  
      <!-- hader section image background -->
      <img src="img-background.jpeg" alt="header-image" 
        class="w-full h-full items-center opacity-25 absolute" />

      <div class="container mx-auto">

      
        <!-- navbar section -->
        <div class="lg:flex lg:justify-between md:flex md:justify-between 
        mx-10 my-10">
            <!-- logo images -->
            <div class="w-[150px] h-[150px]">
              <img src="ngtc-logo.jpeg" alt="" class="rounded-full">
            </div>

            <!-- menu link-->
            <div class="hidden w-full md:block md:w-auto">
                <div class="text-white z-10 bg-[#06A4DF] opacity-[60%] mt-10
                      h-10 rounded-md">
                  <ul class="flex items-center">
                    <li v-for="(menuItem, i) in menuItems" :key="i"
                    class="px-5 py-2 border border-white hover:bg-gray-200 hover:text-[#06A4DF]"
                    :class="{'bg-white text-[#06A4DF]': activeLink == menuItem.title}">
                      <NuxtLink :to="menuItem.link" class="font-normal">{{menuItem.title}}</NuxtLink>
                    </li>
                  </ul>
                </div>
            </div>
            

            <!-- change language icon link -->
            <div class="hidden md:block md:w-auto w-full z-10">
              <div class="text-white mt-10 h-10">
                <NuxtLink to="/arabic"><h3 class="px-3 py-2 text-md font-mono">Ar</h3></NuxtLink>
              </div>
            </div>
            
             <!-- menu link && change language icon link  in mobile version-->
          <div class="sm:hidden">
            <div class="text-white">
              hello small size
            </div>
          </div>
           
        </div>
        
          <!-- Title && SubTitle Section -->
        <div class="text-white lg:mt-[80px] md:mt-[80px] mx-4 items-center grid">
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
    </div>

</template>
<script setup>



const menuItems = ref([
  {title: 'Home', link: '/'},
  {title: 'About', link: '#'},
  {title: 'Partner', link: '#'},
  {title: 'Product', link: '#'},
  {title: 'Contact', link: '#'},
])

const activeLink = useState('activeLink' ,() => 'Home' )

</script>
<style>
  
</style>