<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/methods">Methods</router-link></li>
        <li><router-link to="/template">Template</router-link></li>
        <li><router-link to="/components">Components</router-link></li>
        <li><router-link to="/props">Props</router-link></li>
        <li><router-link to="/computed">Computed</router-link></li>
        <li><router-link to="/watch">Watch</router-link></li>
        <li><router-link to="/directive">Directive</router-link></li>
        <li><router-link to="/mixins">Mixins</router-link></li>
        <li><router-link to="/inject">Inject</router-link></li>
        <li><router-link to="/emits">Emits</router-link></li>
        <li><router-link to="/shared-data">Provide/Inject</router-link></li>
        <li><router-link to="/mounted">Mounted</router-link></li>
        <li><router-link to="/setup">Setup</router-link></li>
        <li><router-link to="/provide">Provide</router-link></li>
        <li><router-link to="/watch-effect">WatchEffect</router-link></li>
        <li><router-link to="/option-api">Option API</router-link></li>
        <li><router-link to="/composition-api">Composition API</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
nav ul li a {
  text-decoration: none;
  color: #42b983;
}
nav ul li a.router-link-exact-active {
  font-weight: bold;
}
</style>