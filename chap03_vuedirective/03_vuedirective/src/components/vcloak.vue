<template>
    <div>
      <p v-cloak>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Vue is working!'
      };
    }
  };
  </script>
  
  <style scoped>
  [v-cloak] {
    display: none;
  }
  </style>