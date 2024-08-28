<template>
  <div class="container">
    <h1 class="title">게시글 수정</h1>
    <form @submit.prevent="updateBoard">
      <div class="field">
        <label class="label">제목</label>
        <div class="control">
          <input class="input" type="text" v-model="board.title" required />
        </div>
      </div>
      <div class="field">
        <label class="label">내용</label>
        <div class="control">
          <textarea class="textarea" v-model="board.content" required></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">작성자</label>
        <div class="control">
          <input class="input" type="text" v-model="board.author" required />
        </div>
      </div>
      <div class="field">
        <button class="button is-primary" type="submit">수정</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'BoardUpdate',
  setup() {
    const board = ref({ title: '', content: '', author: '' });
    const route = useRoute();
    const router = useRouter();
    const boardNo = ref(route.query.no);

    const fetchBoard = async () => {
      try {
        if (!boardNo.value) {
          throw new Error('게시글 번호가 URL에서 제공되지 않았습니다.');
        }

        const response = await fetch(`http://localhost:8085/boards/detail/${boardNo.value}`);
        if (!response.ok) throw new Error('게시글을 가져오는 데 실패했습니다.');
        Object.assign(board.value, await response.json());
      } catch (error) {
        console.error(error);
      }
    };

    const updateBoard = async () => {
      try {
        if (!boardNo.value) {
          throw new Error('게시글 번호가 URL에서 제공되지 않았습니다.');
        }

        const response = await fetch(`http://localhost:8085/boards/update/${boardNo.value}`, { // 수정된 URL
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(board.value) // no 값을 body에서 제거
        });
        if (!response.ok) throw new Error('게시글 수정에 실패했습니다.');
        alert('게시글이 수정되었습니다.');
        router.push('/');  // 홈 페이지로 리디렉션
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchBoard);

    return { board, updateBoard };
  }
}
</script>

<style scoped>
.container {
  margin: 20px;
}
.field {
  margin-bottom: 15px;
}
</style>