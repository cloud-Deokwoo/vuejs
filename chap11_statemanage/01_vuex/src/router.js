import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ProductList from './components/ProductList.vue';
import ProductDetail from './components/ProductDetail.vue';
import ProductInsert from './components/ProductInsert.vue';
import ProductUpdate from './components/ProductUpdate.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/products', component: ProductList },
  { path: '/detail/:pno', component: ProductDetail, props: route => ({ pno: Number(route.params.pno) }) },
  { path: '/insert', component: ProductInsert },
  { path: '/update/:pno', component: ProductUpdate, props: route => ({ pno: Number(route.params.pno) }) }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;