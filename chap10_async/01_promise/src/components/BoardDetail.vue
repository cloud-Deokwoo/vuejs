<template>
  <div class="container">
    <h1 class="title">게시글 상세보기</h1>
    <div v-if="board">
      <h2>{{ board.title }}</h2>
      <p>{{ board.content }}</p>
      <p>작성자: {{ board.author }}</p>
      <p>작성일: {{ board.resdate }}</p>
      <p>조회수: {{ board.hits }}</p>
      <button class="button is-danger" @click="deleteBoard">삭제</button>
      <router-link :to="{ name: 'BoardUpdate', query: { no: board.no } }" class="button is-primary">수정</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'BoardDetail',
  setup() {
    const board = ref(null);
    const route = useRoute(); // Vue Router를 사용하여 현재 라우트 정보 접근
    const router = useRouter(); // Vue Router를 사용하여 프로그래밍적 네비게이션

    const boardNo = ref(route.params.no); // URL 파라미터에서 게시글 번호를 가져옴

    const fetchBoard = async () => {
      try {
        if (!boardNo.value) {
          throw new Error('게시글 번호가 제공되지 않았습니다.');
        }

        const response = await fetch(`http://localhost:8085/boards/detail/${boardNo.value}`);
        if (!response.ok) throw new Error('게시글을 가져오는 데 실패했습니다.');
        board.value = await response.json();
      } catch (error) {
        console.error(error);
      }
    };

    const deleteBoard = async () => {
      try {
        if (!boardNo.value) {
          throw new Error('게시글 번호가 제공되지 않았습니다.');
        }

        const response = await fetch(`http://localhost:8085/boards/delete/${boardNo.value}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) throw new Error('게시글 삭제에 실패했습니다.');
        alert('게시글이 삭제되었습니다.');
        router.push('/'); // 홈 페이지로 리디렉션
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchBoard);

    return { board, deleteBoard };
  }
}
</script>

<style scoped>
.container {
  margin: 20px;
}
.button {
  margin-right: 10px;
}
</style>