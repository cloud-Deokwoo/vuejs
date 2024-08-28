<template>
  <div>
    <h1 class="title">게시글 목록</h1>
    <button class="button is-primary" @click="goToBoardInsert">게시글 추가</button>
    <ul class="list">
      <li v-for="board in boards" :key="board.no">
        <span class="no"> {{ board.no }} </span>
        <router-link :to="'/boards/detail/' + board.no">{{ board.title }}</router-link>
        <span class="author"> {{ board.author }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'BoardList',
  setup() {
    const router = useRouter();
    const boards = ref([]);

    const fetchBoards = async () => {
      try {
        const response = await fetch('http://localhost:8085/boards/list');
        if (!response.ok) throw new Error('Network response was not ok');
        boards.value = await response.json();
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const goToBoardInsert = () => {
      router.push('/boards/insert'); // 게시글 추가 페이지로 라우팅
    };

    onMounted(fetchBoards);

    return { boards, goToBoardInsert };
  }
}
</script>

<style scoped>
.list {
  width:300px;
  margin:10px auto;
}
.title {
  padding-top: 1.2em;
}
.list li {
  text-align: left;
  border-bottom:1px solid #333;
}
.list li:first-child {
  border-top:1px solid #333;
}
.list li:nth-child(2n+1){
  background-color: #f1f1f1;
}
.list li a {
  display:inline-block;
  padding:5px 10px;
  width: 160px; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  margin: 0;
  line-height: 1.3;
  height: 24px;
}
.title {
  margin-bottom: 20px;
}
.button {
  margin-bottom: 20px;
}
.no, .author {
  display:inline-block;
  padding:5px 10px; 
  margin: 0;
  line-height: 1.3; 
  height: 24px;
}
</style>