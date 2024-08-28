<template>
    <div>
      <button v-on:click="handleClick">Click me</button>
      <p>{{ clickMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clickMessage: ''
      };
    },
    methods: {
      handleClick() {
        this.clickMessage = 'Button was clicked!';
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    margin-bottom: 10px;
  }
  </style>