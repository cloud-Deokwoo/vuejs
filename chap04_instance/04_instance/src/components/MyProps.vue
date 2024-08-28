<template>
    <div>
      <h2>Props Example</h2>
      <ChildComponent :message="parentMessage" />
    </div>
</template>
  
<script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    data() {
      return {
        parentMessage: 'Hello from Parent!'
      };
    },
    components: {
      ChildComponent
    }
  };
</script>