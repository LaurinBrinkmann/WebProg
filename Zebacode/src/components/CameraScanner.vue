<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
  <h3>Your decoding
    <br>
    {{ decodedText }}</h3>
    
</template>

<script setup>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
//import { addEntry } from "../App.vue";
const decodedText = ref("");

const onLoaded = () => {
  console.log("loaded");
};

const onDecode = (text) => {
  decodedText.value = text;
  //addEntry(text);
};
</script>

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
  margin-top: 10px;
}
</style>
