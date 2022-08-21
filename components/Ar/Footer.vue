<template>
  <div class="bg-[#504D4D] w-full text-white">
    <div class="container mx-auto pt-5 px-3">
      <div class="grid lg:grid-cols-3 md:grid-cols-3 gird-cols-1 mx-2 gap-2">
        <!-- section contact -->
        <div class="py-3 md:pr-3 lg:pr-3">
          <h1 class="font-semibold text-3xl p-1">
            اتصل بنا
          </h1>
          <h3 class="font-medium text-xl p-1">
           ارسل رسالة
          </h3>
          <div>
            <form class="flex flex-col items-start space-y-5 mt-4">
              <input type="text" placeholder="الاسم الكامل" 
              class="block bg-white w-[80%] border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              text-black"/>
              <input type="email" placeholder="بريدك الالكتروني" 
                class="block bg-white w-[80%] border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              text-black"/>
              <textarea  cols="30" rows="10" placeholder="اكتب رسالتك هنا"
              class="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              text-black"
              ></textarea>
              <button class="block py-2 px-5 bg-black rounded-md">إرسال</button>
            </form>
          </div>
        </div>

        <!-- section sitemap -->
        <div class="py-3 lg:px-20 md:px-10">
          <h1 class="font-semibold text-3xl p-1">
            خريطة الموقع
          </h1>
          <h3 class="font-medium text-xl p-1">
            جميع صفحاتنا
          </h3>

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
            <img src="/ngtc-logo.jpeg" alt="" class="rounded-full">
          </div>

          <!-- phone email -->
          <div class="mt-14 text-start text-xl">
            <p>
              <i class="fas fa-phone ml-3 -rotate-90"></i> 
              
              <span> 
                ٧٨٨٥٨٧١٢٤٨
                (٤٤+)
              </span>
            </p>
            <p class="mt-2">
              <i class="fas fa-envelope ml-3">
              </i> nas.ngtcltd@gmail.com</p>
          </div>
          <!-- social media -->
          <div class="mt-5 text-4xl">
            <a href="https://www.facebook.com/Nas-Company-112261894918998" target="_blank" class="mr-3"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/ngtcltd" target="_blank" class="mr-3"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/nas.ngtcltd/" target="_blank" class="mr-3"><i class="fab fa-instagram"></i></a>
            <a href="#" class="mr-3"><i class="fab fa-snapchat"></i></a>
          </div>
        </div>
        
        
      </div>
       <!-- /end grid section-->
    </div>
    <!-- /end container -->


    <!-- copy right section -->
    <div class="bg-[#333333] text-white h-auto p-2 text-center">
     <p class="font-medium"> 	
      &#169; 
      ٢٠٢٢
      
       شركة ناس ، تطوير وتصميم
      من قبل
      <span class="mr-2 text-gray-400 tracking-wider">مطوري شركة ناس</span>
     </p>
    </div>
  </div>
</template>
<script setup>
import emailjs from 'emailjs-com'



const menuItems =  ref(['الصفحة الرئيسية',
  'معلومات عنا',
  'شركاء',
  'منتجات',
  'اتصل بنا'])


  const fullName = ref('')
const yourEmail = ref('')
const message = ref('')


const SendEmail = (e) => {
  try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
        'YOUR_USER_ID', {
          name: fullName.value,
          email: yourEmail.value,
          message: message.value
        })

  } catch(error) {
      console.log({error})
  }

// reset form field
 fullName.value = ''
 yourEmail.value = ''
 message.value = ''
}
</script>
<style>
  
</style>