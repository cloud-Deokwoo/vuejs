<template>
  <div>
    <h2>Mixins Example</h2>
    <p>Mixin Message: {{ mixinMessage }}</p>
  </div>
</template>

<script>
const myMixin = {
  data() {
    return {
      mixinMessage: 'Hello from Mixin!'
    };
  }
};

export default {
  mixins: [myMixin]
};
</script>