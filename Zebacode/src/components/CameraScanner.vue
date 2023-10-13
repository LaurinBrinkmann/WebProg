<script setup>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

const decodedText = ref(true);
const onLoaded = () => {
  console.log("loaded");
};
const onDecode = (text) => {
  decodedText.value = text;
};

function toggleOnDecode() {
  decodedText.value =!decodedText.value
}
</script>

<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
  <h3>Your decoding test</h3>
  <h3>{{ decodedText }}</h3>
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
  margin-top: 10px;
}
</style>
