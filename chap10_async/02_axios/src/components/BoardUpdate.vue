<template>
  <div>
    <h2>Edit Post</h2>
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
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      board: {}
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`http://localhost:8085/boards/detail/${id}`)
      .then(response => {
        this.board = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    submitForm() {
      // const id = this.$route.params.id; // 필요하지 않다면 이 줄을 제거하세요
      axios.put('http://localhost:8085/boards/update', this.board)
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