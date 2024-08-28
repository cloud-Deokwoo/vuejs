<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">상품 상세보기</h1>
    <div v-if="product">
      <p><strong>상품명:</strong> {{ product.pname }}</p>
      <p><strong>상품설명:</strong> {{ product.pcon }}</p>
      <p><strong>단가:</strong> {{ product.price }}</p>
      <button @click="editProduct" class="px-4 py-2 bg-yellow-500 text-white rounded">수정</button>
      <button @click="deleteProduct" class="px-4 py-2 bg-red-500 text-white rounded">삭제</button>
    </div>
    <div v-else>
      <p>상품을 찾을 수 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

// Vuex store 사용
const store = useStore()
const route = useRoute()
const router = useRouter()

// URL 파라미터에서 pno를 숫자로 변환
const pno = Number(route.params.pno)

// Vuex getter로 상품 정보 가져오기
const product = computed(() => store.getters.getProductByPno(pno))

const editProduct = () => {
  router.push(`/update/${pno}`)
}

const deleteProduct = () => {
  store.commit('deleteProduct', pno)
  router.push('/')
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>