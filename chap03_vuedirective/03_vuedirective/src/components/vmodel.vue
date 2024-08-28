<template>
    <div>
      <input v-model="inputText" placeholder="Type something" />
      <p>You typed: {{ inputText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: ''
      };
    }
  };
  </script>
  
  <style scoped>
  input {
    margin-bottom: 10px;
  }
  </style>