<template>
<div>
  <NuxtLayout name="arabic">
    <!-- About section component -->
    <ArAbout />

    <!-- Product section component -->
    <ArProducts />

    <!-- partner section component -->
    <ArPartner />
  </NuxtLayout>
</div>
</template>

<script setup>
useMeta({
  title: "شركة ناس"
})
</script>