<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
  <h3>Your decoding
    <br>
    {{ decodedText }}</h3>
    
</template>

<!-- <script setup>
import { ref } from "vue";
import { inject } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
const decodedText = ref("");

const onLoaded = () => {
  console.log("loaded");
};

const onDecode = (text) => {
  decodedText.value = text;
  this.$emit("codeScanned", text);
};
</script> -->

<script>
  import { StreamBarcodeReader } from "vue-barcode-reader";
  
  export default {
    emits: ["codeScanned"],
    name: "CameraScanner",
    components: {
      StreamBarcodeReader
    },
    data: function() {
      return {
        decodedText: ""
      };
    },
    methods: {
      onLoaded: function() {
        console.log("loaded");
      },
      onDecode: function(text) {
        this.decodedText = text;
        console.log(text);
        this.$emit("codeScanned", text);
      }
    }
  }
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
