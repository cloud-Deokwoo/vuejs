<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">상품수정</h1>
    <form @submit.prevent="updateProduct">
      <input v-model="product.pname" class="border p-2 w-full mb-4" placeholder="상품명" />
      <textarea v-model="product.pcon" class="border p-2 w-full mb-4" placeholder="상품설명"></textarea>
      <input v-model="product.price" type="number" class="border p-2 w-full mb-4" placeholder="단가" />
      <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">수정</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

// Vuex store 사용
const store = useStore()
const route = useRoute()
const router = useRouter()

const pno = Number(route.params.pno)

const product = ref({
  pname: '',
  pcon: '',
  price: 0
})

onMounted(() => {
  const productFromStore = store.getters.getProductByPno(pno)
  if (productFromStore) {
    product.value = { ...productFromStore }
  }
})

const updateProduct = () => {
  store.commit('updateProduct', {
    pno: pno,
    updatedProduct: product.value
  })
  router.push('/')
}
</script>

<style scoped>
input, textarea {
  display: block;
  width: 90%;
  line-height: 1.6;
  padding: 8px;
  margin: 10px auto;
}
textarea {
  min-height:90px;
}
</style>
