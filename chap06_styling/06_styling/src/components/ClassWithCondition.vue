<template>
    <div :class="isActive ? 'active' : 'inactive'">
      This text uses conditional class binding.
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: true
      };
    }
  };
  </script>
  
  <style>
  .active {
    color: green;
  }
  .inactive {
    color: red;
  }
  </style>