<template>
    <div>
      <h2>Components Example</h2>
      <ChildComponent />
    </div>
</template>
  
<script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent
    }
  };
</script>