import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import BoardList from './components/BoardList.vue';
import BoardDetail from './components/BoardDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/boards', name: 'BoardList', component: BoardList },
  { path: '/boards/:no', name: 'BoardDetail', component: BoardDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;