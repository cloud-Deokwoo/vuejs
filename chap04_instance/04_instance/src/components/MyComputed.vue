<template>
    <div>
      <h2>Computed Example</h2>
      <p>Full Name: {{ fullName }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe'
      };
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  };
</script>