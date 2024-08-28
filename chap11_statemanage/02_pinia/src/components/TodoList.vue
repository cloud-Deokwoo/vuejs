<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Todo List</h1>
    <router-link to="/add" class="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Add Todo</router-link>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"   
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '../store'
import { computed } from 'vue'

const store = useTodoStore()
const todos = computed(() => store.todos)
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
