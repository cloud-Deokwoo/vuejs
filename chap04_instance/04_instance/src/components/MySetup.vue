<template>
    <div>
      <h2>Setup Example</h2>
      <p>{{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const count = ref(0);
      const increment = () => {
        count.value++;
      };
      return {
        count,
        increment
      };
    }
  };
  </script>