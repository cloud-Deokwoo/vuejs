import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)
  .use(router)  // Vue Router 사용
  .mount('#app');  // #app 요소에 Vue 애플리케이션을 마운트