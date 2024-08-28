<template>
    <div>
      <h2>Inject Example</h2>
      <p>{{ sharedData }}</p>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['sharedData']
  };
  </script>