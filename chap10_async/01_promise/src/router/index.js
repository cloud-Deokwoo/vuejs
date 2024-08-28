import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import BoardList from '../components/BoardList.vue';
import BoardDetail from '../components/BoardDetail.vue';
import BoardInsert from '../components/BoardInsert.vue';
import BoardUpdate from '../components/BoardUpdate.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/boards', name: 'BoardList', component: BoardList },
  { path: '/boards/detail/:no', name: 'BoardDetail', component: BoardDetail, props: true },
  { path: '/boards/insert', name: 'BoardInsert', component: BoardInsert },
  { path: '/boards/update/:no', name: 'BoardUpdate', component: BoardUpdate, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;