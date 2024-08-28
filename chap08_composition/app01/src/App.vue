<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/calc">Calc 1 단계</router-link></li>
        <li><router-link to="/calc2">Calc2 단계</router-link></li>
        <li><router-link to="/calc3">Calc3 단계</router-link></li>
        <li><router-link to="/calc4">Calc4 단계</router-link></li>
        <li><router-link to="/calc5">Calc5 단계</router-link></li>
        <li><router-link to="/calc6">Calc6 단계</router-link></li>
        <li><router-link to="/calc7">Calc7 단계</router-link></li>
        <li><router-link to="/calc8">Calc8 단계</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>