<template>
<router-view />
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: function() {
    return {
      listOfEntries: []
    };
  },
  methods: {
    addEntry: function(e) {
      axios
        .post("http://localhost:8080/add", {
          name: e.name    
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

