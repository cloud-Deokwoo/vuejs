<template>
  <div>
    <h2>Watch Example</h2>
    <input v-model="question" placeholder="Ask a question" />
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
    };
  },
  watch: {
    question(newQuestion) {
      if (newQuestion) {
        this.answer = 'Thinking...';
        this.getAnswer();
      } else {
        this.answer = 'I cannot give you an answer until you ask a question!';
      }
    },
  },
  methods: {
    getAnswer() {
      // Mock API call with setTimeout to simulate an asynchronous request
      setTimeout(() => {
        this.answer = '42'; // Example answer
      }, 1000);
    },
  },
};
</script>