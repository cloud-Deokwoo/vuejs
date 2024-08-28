import { createRouter, createWebHistory } from 'vue-router';
import Calc from './components/Calc.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';
import Calc5 from './components/Calc5.vue';
import Calc6 from './components/Calc6.vue';
import Calc7 from './components/Calc7.vue';
import Calc8 from './components/Calc8.vue';

const routes = [
  { path: '/calc', component: Calc },
  { path: '/calc2', component: Calc2 },
  { path: '/calc3', component: Calc3 },
  { path: '/calc4', component: Calc4 },
  { path: '/calc5', component: Calc5 },
  { path: '/calc6', component: Calc6 },
  { path: '/calc7', component: Calc7 },
  { path: '/calc8', component: Calc8 },
  { path: '/', redirect: '/calc' }  // 기본 경로로 리디렉션
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;