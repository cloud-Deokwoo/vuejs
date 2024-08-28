import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../components/TodoList.vue'
import AddTodo from '../components/AddTodo.vue'
import EditTodo from '../components/EditTodo.vue'

const routes = [
  { path: '/', name: 'todo-list', component: TodoList },
  { path: '/add', name: 'add-todo', component: AddTodo },
  { path: '/edit/:id', name: 'edit-todo', component: EditTodo, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router