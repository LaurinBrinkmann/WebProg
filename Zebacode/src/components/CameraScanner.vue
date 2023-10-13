<script setup>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

const decodedText = ref("");

const onLoaded = () => {
  console.log("loaded");
};

const onDecode = (text) => {
  decodedText.value = text;
};
</script>

<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
  <h3>Scanned Text
  <br>
  {{ decodedText }}</h3>
</template>

<style scoped>
a {
  color: #42b983;
}
.information {
  margin-top: 100px;
}

h3 {
  color: #ffffff;
  text-align: center;
}
</style>