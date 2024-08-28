<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div v-if="!editing">
        {{ todo.text }}
        <div class="btn-group" role="group">
          <button 
            type="button" 
            class="btn btn-outline-primary btn-sm" 
            @click="startEditing"
          >Edit</button>
          <button 
            type="button" 
            class="btn btn-outline-danger btn-sm" 
            @click="$emit('delete')"
          >Delete</button>
        </div>
      </div>
  
      <div v-else>
        <input 
          type="text" 
          v-model="newText" 
          class="form-control"
          @keyup.enter="saveEditing"
          @keyup.esc="cancelEditing"
        />
        <div class="btn-group" role="group">
          <button 
            type="button" 
            class="btn btn-outline-success btn-sm" 
            @click="saveEditing"
          >Save</button>
          <button 
            type="button" 
            class="btn btn-outline-secondary btn-sm" 
            @click="cancelEditing"
          >Cancel</button>
        </div>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      todo: Object
    },
    data() {
      return {
        editing: false,
        newText: this.todo.text
      };
    },
    methods: {
      startEditing() {
        this.editing = true;
      },
      saveEditing() {
        if (this.newText.trim()) {
          this.editing = false;
          this.$emit('edit', this.newText);
        }
      },
      cancelEditing() {
        this.editing = false;
        this.newText = this.todo.text;
      }
    }
  };
  </script>