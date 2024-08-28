import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      products: [
        { pno: 1, pname: 'Product 1', pcon: 'Description 1', price: 100 },
        { pno: 2, pname: 'Product 2', pcon: 'Description 2', price: 200 }
      ]
    }
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product)
    },
    updateProduct(state, { pno, updatedProduct }) {
      const product = state.products.find(p => p.pno === pno)
      if (product) {
        Object.assign(product, updatedProduct)
      }
    },
    deleteProduct(state, pno) {
      state.products = state.products.filter(p => p.pno !== pno)
    }
  },
  actions: {
    // Optional: This action could be used if fetching products from an API
    fetchProducts({ commit }) {
      // Example of fetching products from an API (pseudo-code)
      // axios.get('/api/products').then(response => {
      //   response.data.forEach(product => commit('addProduct', product))
      // })
    }
  },
  getters: {
    productList(state) {
      return state.products
    },
    getProductByPno: (state) => (pno) => state.products.find(p => p.pno === pno)
  }
})

export default store
