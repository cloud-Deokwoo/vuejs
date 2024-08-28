<template>
  <div>
    <h1 class="title">Insert Board</h1>
    <form @submit.prevent="insertBoard">
      <input v-model="title" placeholder="Title" required />
      <textarea v-model="content" placeholder="Content" required></textarea>
      <input v-model="author" placeholder="Author" required />
      <button type="submit">Insert</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'BoardInsert',
  setup() {
    const title = ref('');
    const content = ref('');
    const author = ref('');  // 작성자 입력 필드 추가
    const router = useRouter();

    const insertBoard = async () => {
      try {
        const response = await fetch('http://localhost:8085/boards/insert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title.value,
            content: content.value,
            author: author.value  // 작성자 정보 추가
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error: ${errorData.message || 'Unknown error'}`);
        }

        await response.json();  // 응답 본문을 JSON으로 파싱
        router.push('/');  // 홈 페이지로 리디렉션
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return { title, content, author, insertBoard };
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
input, textarea {
  margin-bottom: 10px;
}
</style>
