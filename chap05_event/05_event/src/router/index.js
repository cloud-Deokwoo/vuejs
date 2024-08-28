import { createRouter, createWebHistory } from 'vue-router';
import MouseEvents from '../components/MouseEvents.vue';
import KeyboardEvents from '../components/KeyboardEvents.vue';
import FormEvents from '../components/FormEvents.vue';
import WindowEvents from '../components/WindowEvents.vue';
import MouseWheelEvents from '../components/MouseWheelEvents.vue';

const routes = [
  { path: '/mouse-events', component: MouseEvents },
  { path: '/keyboard-events', component: KeyboardEvents },
  { path: '/form-events', component: FormEvents },
  { path: '/window-events', component: WindowEvents },
  { path: '/mouse-wheel-events', component: MouseWheelEvents }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;