<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Edit Todo</h1>
    <input v-model="title" class="border p-2 w-full mb-4" />
    <button @click="updateTodo" class="px-4 py-2 bg-blue-500 text-white rounded">Update</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTodoStore } from '../store'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useTodoStore()

const title = ref('')

const updateTodo = () => {
  if (title.value.trim()) {
    store.updateTodo(parseInt(route.params.id), title.value)  
    router.push('/')
  }
}

onMounted(() => {
  const todo = store.getTodoById(parseInt(route.params.id))   
  if (todo) {
    title.value = todo.title
  }
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
