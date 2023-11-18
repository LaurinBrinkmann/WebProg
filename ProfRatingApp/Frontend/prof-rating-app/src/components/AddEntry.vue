<template>
    <div>
      <v-text-field id="input" label="Name of professor" v-model="name" size="100%"></v-text-field>
      <v-rating id="rating" v-model="rating" background-color="black" color="#ffcc00"></v-rating>
      <v-btn @click="addEntry">Add</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddEntry",
    data: function() {
      return {
        name: "",
        rating: 0
      };
    },
    methods: {
      addEntry: function() {
        if (this.name.length > 0) {
          this.$emit("entryAdded", {
            name: this.name,
            rating: this.rating
          });
          this.name = "";
          this.rating = 0;
        }
      }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  div {
    display: flex;
    align-items: center;
  }
  </style>