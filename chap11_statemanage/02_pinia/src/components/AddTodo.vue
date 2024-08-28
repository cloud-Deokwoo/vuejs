<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Add Todo</h1>
    <input v-model="title" class="border p-2 w-full mb-4" placeholder="Todo title" />
    <button @click="addTodo" class="px-4 py-2 bg-green-500 text-white rounded">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../store'
import { useRouter } from 'vue-router'

const title = ref('')
const store = useTodoStore()
const router = useRouter()

const addTodo = () => {
  if (title.value.trim()) {
    store.addTodo(title.value)
    router.push('/')
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
