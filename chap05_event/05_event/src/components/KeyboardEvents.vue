<template>
    <div>
      <h2>Keyboard Events Example</h2>
      <input @keydown="handleKeyDown" @keyup="handleKeyUp" placeholder="Type something" />
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleKeyDown() {
        console.log('Key down');
      },
      handleKeyUp() {
        console.log('Key up');
      }
    }
  };
  </script>