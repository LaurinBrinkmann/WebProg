<template>
    <div>
      <span v-show="!isEditable" id="name" @click="editEntry">{{ entry.name }}</span>
      <v-text-field
        id="input"
        v-show="isEditable"
        label="Name of professor"
        v-model="entry.name"
        @focusout="editEntry"
        ref="input"
      ></v-text-field>
  
      <v-rating v-model="entry.rating" background-color="black" color="#ffcc00" @input="editRating"></v-rating>
      <v-btn @click="removeEntry">Remove</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListEntries",
    props: ["entry", "index"],
    data: function() {
      return {
        isEditable: false
      };
    },
    methods: {
      removeEntry: function() {
        this.$emit("entryRemoved", {
          index: this.index
        });
      },
      editRating: function() {
        this.$emit("entryEdited", {
          index: this.index,
          name: this.entry.name,
          rating: this.entry.rating
        });
      },
      editEntry: function() {
        if (this.isEditable) {
          this.isEditable = false;
          this.$emit("entryEdited", {
            index: this.index,
            name: this.entry.name,
            rating: this.entry.rating
          });
        } else {
          this.isEditable = true;
  
          // Focus the component, but we have to wait
          // so that it will be showing first.
          this.$nextTick().then(() => {
            this.focusInput();
          });
        }
      },
      focusInput() {
        this.$refs.input.focus();
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
  #name,
  #input {
    width: 300px;
    text-align: left;
  }
  </style>