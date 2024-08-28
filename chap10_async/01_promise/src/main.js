import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

// Create and mount the Vue app
const app = createApp(App);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');