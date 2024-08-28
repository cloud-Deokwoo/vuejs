<template>
    <div>
      <h2>Form Events Example</h2>
      <input @input="handleInput" @change="handleChange" placeholder="Type and change" />
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="formData" placeholder="Submit this form" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: ''
      };
    },
    methods: {
      handleInput(event) {
        console.log('Input event: ', event.target.value);
      },
      handleChange(event) {
        console.log('Change event: ', event.target.value);
      },
      handleSubmit() {
        alert(`Form submitted with data: ${this.formData}`);
      }
    }
  };
  </script>