<template>
    <div>
      <button @click="currentState = 'A'">State A</button>
      <button @click="currentState = 'B'">State B</button>
      <button @click="currentState = 'C'">State C</button>
      
      <p v-if="currentState === 'A'">State A is active</p>
      <p v-else-if="currentState === 'B'">State B is active</p>
      <p v-else-if="currentState === 'C'">State C is active</p>
      <p v-else>No state is active</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentState: ''
      };
    }
  };
  </script>
  
  <style scoped>
  button {
    margin-right: 10px;
  }
  </style>