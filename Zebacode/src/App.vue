<template>
<router-view v-on:codeScanned="addEntry"/>
</template>

<script>
import axios from "axios";
import { provide } from "vue";

export default {
  name: "App",
  data: function() {
    return {
      listOfEntries: []
    };
  },
  methods: {
    addEntry: function(e) {
      console.log(e);  
      axios
        .post("http://localhost:8080/add", {
          name: e
        })
        .then(response => {
          this.listOfEntries = response.data;
        });
    },
    getEntries: function(e) {
      axios.get("http://localhost:8080/list").then(response => {
      this.listOfEntries = response.data;
        });
    }
  }
};
</script>

