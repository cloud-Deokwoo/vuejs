<template>
    <div :style="styleObject">
      This text uses an object for styling.
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        styleObject: {
          color: 'green',
          fontSize: '24px'
        }
      };
    }
  };
  </script>