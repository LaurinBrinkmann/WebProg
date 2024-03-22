<script setup>
  import TopBar from '../components/TopBar.vue'
  import CameraScanner from '../components/CameraScanner.vue'
  import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <body>
    <TopBar />
    <div>
      <CameraScanner />
    </div>
    <NavBar />
  </body>
</template>

<style scoped>
  body {
    margin: auto;
    padding: 0;
    background-color: #1a1a1a;
    height: 100vh;
  }

  div {
    margin: auto;
    width: 640px;
  }
</style>

