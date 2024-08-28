<template>
  <li class="mb-2 flex justify-between items-center p-2 border rounded">
    <span>{{ todo.title }}</span>
    <div>
      <button @click="editTodo" class="text-blue-500 hover:underline">Edit</button>
      <button @click="deleteTodo" class="ml-4 text-red-500 hover:underline">Delete</button>
    </div>
  </li>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import { useTodoStore } from '../store'

const props = defineProps({
  todo: Object
})

const router = useRouter()
const store = useTodoStore()

const editTodo = () => {
  router.push({ name: 'edit-todo', params: { id: props.todo.id } })
}

const deleteTodo = () => {
  store.deleteTodo(props.todo.id)
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>