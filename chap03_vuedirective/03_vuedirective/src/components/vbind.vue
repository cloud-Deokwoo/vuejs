<template>
    <div>
      <img v-bind:src="imageSrc" alt="Vue Logo" />
      <p v-bind:style="{ color: textColor }">Styled text</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageSrc: 'https://vuejs.org/images/logo.png',
        textColor: 'blue'
      };
    }
  };
  </script>
  
  <style scoped>
  img {
    width: 100px;
  }
  </style>