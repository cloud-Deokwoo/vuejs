<template>
    <div>
      <p v-text="message"></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, Vue 3 with v-text!'
      };
    }
  };
  </script>
  
  <style scoped>
  p {
    font-size: 16px;
  }
  </style>