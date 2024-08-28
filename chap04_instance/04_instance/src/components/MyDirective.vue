<template>
    <div v-focus>
      <h2>Custom Directive Example</h2>
      <input type="text">
    </div>
  </template>
  
  <script>
  export default {
    directives: {
      focus: {
        mounted(el) {
          el.focus();
        }
      }
    }
  };
  </script>