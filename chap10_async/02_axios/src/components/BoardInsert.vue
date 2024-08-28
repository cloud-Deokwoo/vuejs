<template>
    <div>
      <h2>Create New Post</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Title</label>
          <input v-model="board.title" type="text" id="title" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <textarea v-model="board.content" id="content" class="form-control" required></textarea>
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input v-model="board.author" type="text" id="author" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        board: {
          title: '',
          content: '',
          author: ''
        }
      };
    },
    methods: {
      submitForm() {
        axios.post('http://localhost:8085/boards/insert', this.board)
          .then(() => {
            this.$router.push('/board');
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>