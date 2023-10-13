<script setup>
  import TopBar from '../components/TopBar.vue'
  import CameraScanner from '../components/CameraScanner.vue'
  import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <body>
    <TopBar />
    <CameraScanner />
    <NavBar />
  </body>
</template>

<style scoped>
  body {
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;
    height: 100vh;
  }
</style>

