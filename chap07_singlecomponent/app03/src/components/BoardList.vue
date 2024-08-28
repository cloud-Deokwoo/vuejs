<template>
    <div>
      <h2 class="title">Board List</h2>
      <ul>
        <li v-for="board in boards" :key="board.no" class="box">
          <router-link :to="{ name: 'BoardDetail', params: { no: board.no } }" class="title is-5">
            {{ board.title }}
          </router-link>
          <p>{{ board.resdate }} | Views: {{ board.visit }}</p>
        </li>
      </ul>
      <form @submit.prevent="addBoard" class="box">
        <input v-model="newBoard.title" placeholder="Title" class="input mb-2" required />
        <textarea v-model="newBoard.contents" placeholder="Contents" class="textarea mb-2" required></textarea>
        <button type="submit" class="button is-primary">Add Board</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boards: [
          { no: 1, title: 'First Post', contents: 'This is the first post.', resdate: '2024-08-22', visit: 10 },
          { no: 2, title: 'Second Post', contents: 'This is the second post.', resdate: '2024-08-23', visit: 5 }
        ],
        newBoard: { title: '', contents: '' }
      };
    },
    methods: {
      addBoard() {
        const newBoard = {
          no: this.boards.length + 1,
          title: this.newBoard.title,
          contents: this.newBoard.contents,
          resdate: new Date().toISOString().split('T')[0],
          visit: 0
        };
        this.boards.push(newBoard);
        this.newBoard = { title: '', contents: '' };
      }
    }
  };
  </script>