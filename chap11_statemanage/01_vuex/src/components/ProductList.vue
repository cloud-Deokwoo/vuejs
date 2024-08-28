<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">상품목록</h1>
    <router-link to="/insert" class="btn btn-primary">상품등록</router-link>
    <ul>
      <li v-for="product in products" :key="product.pno" class="border p-2 mb-2">
        <router-link :to="`/detail/${product.pno}`" class="font-semibold">{{ product.pname }}</router-link>
        - {{ product.price }} 원
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// Use getter to get the list of products
const products = computed(() => store.getters.productList)
</script>

<style scoped>
.btn { 
  display:block; 
  min-width: 95px;
  padding: 10px 6px;
  margin: 10px auto;
  border-radius: 5px;
}
.btn-primary {
  background-color: deepskyblue;
  color: #fff;
}
</style>