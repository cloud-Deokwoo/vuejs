<template>
    <div>
      <h2>Mouse Wheel Events Example</h2>
      <div @mousewheel="handleMouseWheel">Scroll with mouse wheel here</div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleMouseWheel(event) {
        console.log('Mouse wheel event:', event);
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