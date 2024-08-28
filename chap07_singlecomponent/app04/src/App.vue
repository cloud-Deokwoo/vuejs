<!-- 03. 애플리케이션 Vue 템플릿 객체 : template, script, style -->

<template>
  <CheckboxItem />
  <CheckboxItem />
  <CheckboxItem />
</template>

<script>
import CheckboxItem from "./components/CheckboxItem.vue"

export default {
  name: "App",
  components : { CheckboxItem }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
