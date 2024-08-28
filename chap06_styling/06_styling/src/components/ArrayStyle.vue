<template>
    <div :style="[baseStyle, additionalStyle]">
      This text uses multiple style objects in an array.
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        baseStyle: {
          color: 'purple',
          fontSize: '18px'
        },
        additionalStyle: {
          backgroundColor: 'lightgray'
        }
      };
    }
  };
  </script>