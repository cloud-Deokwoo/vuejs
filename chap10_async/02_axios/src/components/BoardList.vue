<template>
    <div>
      <h2>Board List</h2>
      <ul class="list-group">
        <li v-for="board in boards" :key="board.no" class="list-group-item">
          <router-link :to="'/board/detail/' + board.no">{{ board.title }}</router-link>
        </li>
      </ul>
      <router-link to="/board/insert" class="btn btn-primary mt-3">Add New Post</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        boards: []
      };
    },
    created() {
      axios.get('http://localhost:8085/boards/list')
        .then(response => {
          this.boards = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  </script>