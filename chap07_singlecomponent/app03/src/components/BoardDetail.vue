<template>
    <div v-if="board">
      <h2 class="title">{{ board.title }}</h2>
      <p>{{ board.contents }}</p>
      <p><strong>Date:</strong> {{ board.resdate }} | <strong>Views:</strong> {{ board.visit }}</p>
  
      <button @click="deleteBoard" class="button is-danger mt-4">Delete Board</button>
  
      <form @submit.prevent="updateBoard" class="box mt-4">
        <input v-model="board.title" placeholder="Title" class="input mb-2" />
        <textarea v-model="board.contents" placeholder="Contents" class="textarea mb-2"></textarea>
        <button type="submit" class="button is-info">Update Board</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['no'],
    data() {
      return {
        boards: [
          { no: 1, title: 'First Post', contents: 'This is the first post.', resdate: '2024-08-22', visit: 10 },
          { no: 2, title: 'Second Post', contents: 'This is the second post.', resdate: '2024-08-23', visit: 5 }
        ]
      };
    },
    computed: {
      board() {
        return this.boards.find(board => board.no === parseInt(this.no));
      }
    },
    methods: {
      deleteBoard() {
        this.boards = this.boards.filter(board => board.no !== parseInt(this.no));
        this.$router.push({ name: 'BoardList' });
      },
      updateBoard() {
        alert('Board updated!');
      }
    }
  };
  </script>