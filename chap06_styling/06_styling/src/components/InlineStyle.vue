<template>
    <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
      This text uses inline styling.
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        textColor: 'blue',
        fontSize: 20
      };
    }
  };
  </script>