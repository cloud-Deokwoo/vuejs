<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Vbind />
  <Vcloak />
  <Vfor />
  <Vhtml />
  <Vif />
  <Vmode />
  <Von />
  <Vonce />
  <Vpre />
  <Vshow />
  <Vtext />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vbind from './components/vbind.vue';
import Vcloak from './components/vcloak.vue';
import Vfor from './components/vfor.vue';
import Vhtml from './components/vhtml.vue';
import Vif from './components/vif.vue';
import Vmode from './components/vmode.vue';
import Von from './components/von.vue';
import Vonce from './components/vonce.vue';
import Vpre from './components/vpre.vue';
import Vshow from './components/vshow.vue';
import Vtext from './components/vtext.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Vbind,
    Vcloak,
    Vfor,
    Vhtml,
    Vif,
    Vmode,
    Von,
    Vonce,
    Vpre,
    Vshow,
    Vtext
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
