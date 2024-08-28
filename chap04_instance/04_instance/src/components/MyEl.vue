<template>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>
</template>

<script>
import { createApp, ref } from 'vue';

export default {
setup() {
    // Vue 3에서는 ref를 사용해 reactive 상태를 만듭니다.
    const message = ref('Hello Vue!');

    return {
    message
    };
}
};

// Vue 2의 new Vue 인스턴스 대신, Vue 3에서는 createApp을 사용합니다.
createApp({
data() {
    return {
    message: 'Hello Vue!'
    };
}
}).mount('#app');
</script>

<style scoped>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>  