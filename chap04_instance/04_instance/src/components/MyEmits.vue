<template>
    <div>
      <h2>Emits Example</h2>
      <button @click="sendEvent">Emit Event</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['custom-event'],
    methods: {
      sendEvent() {
        this.$emit('custom-event', 'Hello from Emits!');
      }
    }
  };
  </script>