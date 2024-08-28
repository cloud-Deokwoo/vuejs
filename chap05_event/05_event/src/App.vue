<template>
  <div id="app">
    <h1>Vue 3 Event Handling Examples</h1>
    <nav>
      <router-link to="/mouse-events">Mouse Events</router-link> |
      <router-link to="/keyboard-events">Keyboard Events</router-link> |
      <router-link to="/form-events">Form Events</router-link> |
      <router-link to="/window-events">Window Events</router-link> |
      <router-link to="/mouse-wheel-events">Mouse Wheel Events</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>