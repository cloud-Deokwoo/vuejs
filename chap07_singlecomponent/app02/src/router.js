import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import UserList from './components/UserList.vue'
import UserDetail from './components/UserDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/users', name: 'UserList', component: UserList },
  { path: '/users/:id', name: 'UserDetail', component: UserDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router