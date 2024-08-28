<template>
    <div>
      <h2>Composition API Example</h2>
      <p>{{ message }}</p>
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const message = ref('This is Composition API!');
      const updateMessage = () => {
        message.value = 'Message updated!';
      };
      return {
        message,
        updateMessage
      };
    }
  };
  </script>