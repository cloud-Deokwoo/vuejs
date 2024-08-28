<template>
    <div :class="{ active: isActive, 'text-danger': hasError }">
      This text uses class binding.
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: true,
        hasError: false
      };
    }
  };
  </script>
  
  <style>
  .active {
    font-weight: bold;
  }
  .text-danger {
    color: red;
  }
  </style>