<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">상품등록</h1>
    <form @submit.prevent="addProduct">
      <input v-model="title" class="border p-2 w-full mb-4" placeholder="상품명" />
      <textarea v-model="description" class="border p-2 w-full mb-4" placeholder="상품설명"></textarea>
      <input v-model="price" type="number" class="border p-2 w-full mb-4" placeholder="단가" />
      <button type="submit" class="btn btn-primary">등록</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const title = ref('')
const description = ref('')
const price = ref('')
const store = useStore()
const router = useRouter()

const addProduct = () => {
  if (title.value.trim() && description.value.trim() && price.value) {
    const newProduct = {
      pno: store.state.products.length ? Math.max(...store.state.products.map(p => p.pno)) + 1 : 1,
      pname: title.value,
      pcon: description.value,
      price: parseFloat(price.value)
    }
    store.commit('addProduct', newProduct)
    router.push('/')
  }
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