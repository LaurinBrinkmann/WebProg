<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
  <h3>Your decoding
    <br>
    {{ decodedText }}</h3>
    
</template>

<script>
  import { StreamBarcodeReader } from "vue-barcode-reader";
  import axios from 'axios';

  export default {
    emits: ['codeScanned'],
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
        axios.post("http://localhost:8080/add", {
          name: text
        })
        console.log("emitting");
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
