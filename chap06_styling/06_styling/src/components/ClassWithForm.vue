<template>
    <div>
      <input v-model="isChecked" type="checkbox"> Toggle Highlight
      <div :class="{ highlighted: isChecked }">
        This text highlights based on form control.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isChecked: false
      };
    }
  };
  </script>
  
  <style>
  .highlighted {
    background-color: yellow;
  }
  </style>