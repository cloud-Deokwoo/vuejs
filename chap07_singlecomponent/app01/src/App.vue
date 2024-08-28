<template>
  <div id="app" class="container mt-5">
    <h1 class="text-center mb-4">Vue 3 Todo List</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList
  }
};
</script>