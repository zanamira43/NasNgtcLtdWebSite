<template>
  <div>
    <div class="border w-full h-[500px] bg-black relative overflow-auto">

      <!-- menu panel for mobile version -->
      <div class="text-white top-0 left-0 w-full px-5 py-5 z-40 overflow-hidden absolute
      bg-black opacity-90 h-full lg:hidden items-center" :class="`${openMenu ? 'flex flex-col': 'hidden'}`">
       <button @click="openMenu = false" class="text-left text-2xl">X</button>
        <ul class="flex flex-col items-center w-full mt-10">
            <li v-for="(menuItem, i) in menuItems" :key="i"
            class="px-5 py-5 hover:bg-gray-500 hover:text-white hover:rounded-md"
            :class="{'bg-gray-800 rounded-md': activeLink == menuItem.title}">
              <a :href="menuItem.link" class="font-normal">{{menuItem.title}}</a>
            </li>
        </ul>
      </div>
  
      <!-- hader section image background -->
      <img src="/img-background.jpeg" alt="header-image" 
        class="w-full h-full items-center opacity-25 absolute" />

      <div class="container mx-auto">      
        <!-- navbar section -->
        <div class="flex justify-between mx-10 my-10">
            <!-- logo images -->
            <div class="md:w-[150px] md:h-[150px] lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] z-10">
              <NuxtLink to="/kurdish">
                <img src="/ngtc-logo.jpeg" alt="" class="rounded-full" />
              </NuxtLink>
            </div>

            <!-- menu link-->
            <div class="hidden w-full lg:block md:w-auto">
                <div class="text-white z-10 bg-[#06A4DF] opacity-[60%] mt-10
                      h-10 rounded-md">
                  <ul class="flex items-center">
                    <li v-for="(menuItem, i) in menuItems" :key="i"
                    class="px-5 py-2 hover:bg-gray-200 hover:text-[#06A4DF]"
                    :class="{'bg-white text-[#06A4DF]': activeLink == menuItem.title}">
                      <a :href="menuItem.link" class="font-bold">{{menuItem.title}}</a>
                    </li>
                  </ul>
                </div>
            </div>
            
             <!-- change language icon link -->
            <div class="block z-10 mt-10">
              <button class="text-2xl font-bold text-white" @click="langMenu = !langMenu">
                <i class="fas fa-language"></i>
              </button>
              <div class="translate-x-3 flex flex-col items-center space-y-3 text-center text-white"
              v-if="langMenu">
                <NuxtLink to="/"><h3 class="font-mono">ئنگلیزی</h3></NuxtLink>
                <NuxtLink to="/arabic"><h3 class="font-mono">عەرەبی</h3></NuxtLink>
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
        
          <!-- Title && SubTitle Section -->
        <div class="text-white mt-20 lg:mt-[80px] md:mt-[80px] mx-4 items-center grid">
          <div class="grid-cols-1 gap-1 mx-auto w-5/2">
              <h1 class="lg:text-5xl md:text-5xl text-4xl font-bold">
              <!-- Nas General Trading Company -->
                  کۆمپانیای ناس بۆبازرگانی گشتی
            </h1>
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-medium mt-1">
              <!-- One-Stope Supperler For Multi-Products On the Globle Scale -->
              وێستگەی ئێوەیە بە بەرهەمە جیاوزەکانی لەسەر ئاستی جیهان
            </h2>
          </div>
          
        </div>
      </div>
      </div>
    </div>

</template>
<script setup>



const openMenu = ref(false)
const langMenu = ref(false)

const menuItems = ref([
  {title: 'ماڵەوە', link: '/kurdish'},
  {title: 'دەربارەی ئێمە', link: '/kurdish/#kuAbout'},
  {title: 'بەرهەمەکان', link: '/kurdish/#kuProduct'},
  {title: 'هاوبەشەکان', link: '/kurdish/#kuPartner'},
  {title: 'پەیوەندی', link: '/kurdish/#kuContact'},
])

const activeLink = useState('activeLink' ,() => 'ماڵەوە' )



</script>
<style>
  
</style>