// src/store/index.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [
      { id: 1, title: 'Learn Vue 3', createdAt: new Date().toISOString() },
      { id: 2, title: 'Learn Pinia', createdAt: new Date().toISOString() }
    ]
  }),
  actions: {
    addTodo(title) {
      const newTodo = {
        id: this.todos.length ? Math.max(...this.todos.map(t => t.id)) + 1 : 1,
        title,
        createdAt: new Date().toISOString()
      }
      this.todos.push(newTodo)
    },
    updateTodo(id, newTitle) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        todo.title = newTitle
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  },
  getters: {
    getTodoById: (state) => (id) => state.todos.find(todo => todo.id === id)
  }
})