<template>
    <div>
      <button @click="toggleVisibility">Toggle Visibility</button>
      <p v-show="isVisible">This text can be shown or hidden</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: true
      };
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    margin-bottom: 10px;
  }
  </style>