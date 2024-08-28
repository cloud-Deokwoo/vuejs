<template>
    <div>
      <h2>WatchEffect Example</h2>
      <p>{{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script>
  import { ref, watchEffect } from 'vue';
  
  export default {
    setup() {
      const count = ref(0);
      const increment = () => {
        count.value++;
      };
  
      watchEffect(() => {
        console.log(`Count is now: ${count.value}`);
      });
  
      return {
        count,
        increment
      };
    }
  };
  </script>