<template>
    <div>
      <h2>Provide Example</h2>
      <ChildComponent />
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    provide() {
      return {
        sharedData: 'This is shared data from provide'
      };
    },
    components: {
      ChildComponent
    }
  };
  </script>