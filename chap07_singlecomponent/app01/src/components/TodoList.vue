<template>
    <div>
      <form @submit.prevent="addTodo">
        <div class="input-group mb-3">
          <input 
            type="text" 
            v-model="newTodo" 
            class="form-control" 
            placeholder="Enter new todo"
            aria-label="Enter new todo" 
          />
          <button class="btn btn-outline-secondary" type="submit">Add</button>
        </div>
      </form>
  
      <ul class="list-group">
        <TodoItem 
          v-for="(todo, index) in todos" 
          :key="index" 
          :todo="todo" 
          @delete="deleteTodo(index)" 
          @edit="editTodo(index, $event)" 
        />
      </ul>
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  
  export default {
    components: {
      TodoItem
    },
    data() {
      return {
        newTodo: '',
        todos: []
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.push({ text: this.newTodo, editing: false });
          this.newTodo = '';
        }
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
      editTodo(index, newText) {
        this.todos[index].text = newText;
      }
    }
  };
  </script>