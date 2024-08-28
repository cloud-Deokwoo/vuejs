<template>
    <div>
      <p v-pre>{{ rawTemplate }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rawTemplate: '<strong>Raw HTML content</strong>'
      };
    }
  };
  </script>
  
  <style scoped>
  p {
    font-size: 16px;
  }
  </style>