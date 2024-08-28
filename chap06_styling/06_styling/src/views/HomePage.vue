<template>
    <div class="wrap">
      <h1>Welcome to the Vue Styling Examples</h1>
      <router-link to="/inline-style">Inline Style</router-link><br>
      <router-link to="/class-style">Class Style</router-link><br>
      <router-link to="/object-style">Object Style</router-link><br>
      <router-link to="/array-style">Array Style</router-link><br>
      <router-link to="/class-condition">Class with Condition</router-link><br>
      <router-link to="/class-form">Class with Form Control</router-link><br>
      <router-link to="/bootstrap">Bootstrap Example</router-link><br>
      <router-link to="/tailwind">Tailwind Example</router-link><br>
      <router-link to="/bulma">Bulma Example</router-link><br>
      <router-link to="/foundation">Foundation Example</router-link><br>
      <router-link to="/pure">Pure Example</router-link><br>
      <router-link to="/materialize">Materialize Example</router-link><br>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  };
  </script>

  <style scoped>
  .wrap {
    width: 960px;
    margin: 25px auto;
  }
  </style>