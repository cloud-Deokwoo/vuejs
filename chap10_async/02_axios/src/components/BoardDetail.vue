<template>
    <div>
      <h2>{{ board.title }}</h2>
      <p>{{ board.content }}</p>
      <p>Author: {{ board.author }} | Date: {{ board.resdate }}</p>

      <div class="btn-group">
        <router-link :to="'/board/update/' + board.no" class="btn btn-warning">Edit</router-link>
        <button @click="deleteBoard" class="btn btn-danger">Delete</button>
        <router-link to="/board" class="btn btn-secondary">Back to List</router-link>
      </div>  
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
      deleteBoard() {
        const id = this.$route.params.id;
        axios.delete(`http://localhost:8085/boards/delete/${id}`)
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
  <style scoped>
  .btn-group .btn {
    margin: 10px 0px;
    padding: 5px 8px; 
  }
  </style>