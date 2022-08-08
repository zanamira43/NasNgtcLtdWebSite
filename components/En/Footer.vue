<template>
  <div class="bg-[#504D4D] w-full text-white my-0">
    <div class="container mx-auto pt-5">
      <div class="grid lg:grid-cols-3 md:grid-cols-3 gird-cols-1 mx-2 gap-2">
        <!-- section contact -->
        <div class="py-3 md:pr-3 lg:pr-3">
          <h1 class="font-semibold text-3xl p-1">Contant Us</h1>
          <h3 class="font-medium text-xl p-1">Send a Message</h3>
          <div>
            <form class="flex flex-col items-start space-y-5 mt-4">
              <input type="text" placeholder="Full Name" 
              class="block bg-white w-[80%] border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              text-black"/>
              <input type="email" placeholder="Your Email" 
                class="block bg-white w-[80%] border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              text-black"/>
              <textarea  cols="30" rows="10" placeholder="Type Your Message Here"
              class="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              text-black"
              ></textarea>
              <button class="block py-2 px-5 bg-black rounded-md">Submit</button>
            </form>
          </div>
        </div>

        <!-- section sitemap -->
        <div class="py-3 lg:px-20 md:px-10">
          <h1 class="font-semibold text-3xl p-1">Site Map</h1>
          <h3 class="font-medium text-xl p-1">All Our Pages</h3>

          <div class="lg:mt-14 md:mt-14 mt-8">
            <ul class="py-2">
              <li v-for="(menuItem, i) in menuItems" :key="i"
              class="font-normal text-lg">
                - {{menuItem}}
              </li>
            </ul>
          </div>
        </div>

        <!-- section logo - phone - email -->
        <div class="py-3 lg:pl-3 md:pl-3">
          <!-- logo -->
          <div class="w-[150px] h-[150px]">
            <img src="ngtc-logo.jpeg" alt="" class="rounded-full">
          </div>

          <!-- phone email -->
          <div class="mt-14 text-start text-xl">
            <p>
              <i class="fas fa-phone mr-3 -rotate-90"></i> 
              (08) 200 4000
            </p>
            <p class="mt-2">
              <i class="fas fa-envelope mr-3">
              </i> email@email.com</p>
          </div>
          <!-- social media -->
          <div class="mt-5 text-4xl flex space-x-4">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            
          </div>
        </div>
        
        
      </div>
       <!-- /end grid section-->
    </div>
    <!-- /end container -->


    <!-- copy right section -->
    <div class="bg-[#333333] text-white h-auto p-2 text-center">
     <p class="font-medium"> 	&#169; 2022 Nas Company, Developed and Designed by 
      <span class="text-gray-400">Nas Team Developer</span> </p>
    </div>
  </div>
</template>
<script setup>



const menuItems = ref(['Home','About','Partner','Product','Contact'])


</script>
<style>
  
</style>