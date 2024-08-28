<template>
    <div>
      <p v-once>This text will not change: {{ message }}</p>
      <button @click="updateMessage">Change Message</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Initial message'
      };
    },
    methods: {
      updateMessage() {
        this.message = 'Updated message';
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    margin-top: 10px;
  }
  </style>