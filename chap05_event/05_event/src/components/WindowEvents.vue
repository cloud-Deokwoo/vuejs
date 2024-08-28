<template>
    <div>
      <h2>Window Events Example</h2>
      <p>Resize the window to see events.</p>
      <div @scroll.passive="handleScroll">Scroll inside this box</div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        console.log('Window resized');
      },
      handleScroll() {
        console.log('Scrolled inside the box');
      }
    }
  };
  </script>
  
  <style scoped>
  div {
    height: 200px;
    overflow-y: scroll;
    border: 1px solid #ccc;
  }
  </style>