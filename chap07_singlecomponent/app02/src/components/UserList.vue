<template>
    <div>
      <h2 class="text-xl font-bold mb-4">User List</h2>
      <ul>
        <li v-for="user in users" :key="user.id" class="mb-2">
          <router-link :to="{ name: 'UserDetail', params: { id: user.id } }" class="text-blue-500">
            {{ user.name }} ({{ user.email }})
          </router-link>
        </li>
      </ul>
      <form @submit.prevent="addUser" class="mt-4">
        <input v-model="newUser.name" placeholder="Name" class="border p-2 mr-2" />
        <input v-model="newUser.email" placeholder="Email" class="border p-2 mr-2" />
        <input v-model="newUser.id" placeholder="ID" class="border p-2 mr-2" />
        <button type="submit" class="bg-blue-500 text-white p-2">Add User</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { id: '1', name: 'kim', email: 'kim@naver.com' },
          { id: '2', name: 'lee', email: 'lee@google.com' }
        ],
        newUser: { id: '', name: '', email: '' }
      };
    },
    methods: {
      addUser() {
        if (this.newUser.name && this.newUser.email && this.newUser.id) {
          this.users.push({ ...this.newUser });
          this.newUser = { id: '', name: '', email: '' };
        }
      }
    }
  }
  </script>