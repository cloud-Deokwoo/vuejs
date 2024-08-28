<template>
    <div v-if="user">
      <h2 class="text-xl font-bold mb-4">User Details</h2>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
  
      <button @click="deleteUser" class="bg-red-500 text-white p-2 mt-4">Delete User</button>
  
      <form @submit.prevent="updateUser" class="mt-4">
        <input v-model="user.name" placeholder="Name" class="border p-2 mr-2" />
        <input v-model="user.email" placeholder="Email" class="border p-2 mr-2" />
        <button type="submit" class="bg-green-500 text-white p-2">Update User</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        users: [
          { id: '1', name: 'kim', email: 'kim@naver.com' },
          { id: '2', name: 'lee', email: 'lee@google.com' }
        ]
      };
    },
    computed: {
      user() {
        return this.users.find(user => user.id === this.id);
      }
    },
    methods: {
      deleteUser() {
        this.users = this.users.filter(user => user.id !== this.id);
        this.$router.push({ name: 'UserList' });
      },
      updateUser() {
        alert('User updated!');
      }
    }
  }
  </script>