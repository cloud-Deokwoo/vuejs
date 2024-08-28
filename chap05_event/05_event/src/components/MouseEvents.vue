<template>
    <div>
      <h2>Mouse Events Example</h2>
      <button @click="handleClick">Click Me</button>
      <button @dblclick="handleDblClick">Double Click Me</button>
      <div @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        Hover over me
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        alert('Button clicked!');
      },
      handleDblClick() {
        alert('Button double-clicked!');
      },
      handleMouseOver() {
        console.log('Mouse over the div');
      },
      handleMouseOut() {
        console.log('Mouse out of the div');
      }
    }
  };
  </script>