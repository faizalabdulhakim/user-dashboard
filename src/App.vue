<template>
  <div class="container flex flex-nowrap">
    <Sidebar />
    <div class="flex flex-col justify-between items-center w-full">
      <Header />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@components/Sidebar.vue';
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';
</script>
