<template>
    <div>
      <p v-html="htmlContent"></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        htmlContent: '<strong>This is bold text</strong>'
      };
    }
  };
  </script>
  
  <style scoped>
  p {
    font-size: 16px;
  }
  </style>