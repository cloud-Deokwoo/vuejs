//02. 애플리케이션 인스턴스 : index.html의 `<div id="app"></div>` 인 곳에 마운트 시킴
import { createApp } from 'vue'
import './style.css'
//import App from './App.vue'
//import App from './App1.vue'
//import App from './App2.vue'
//import App from './App3.vue'
//import App from './App4.vue'
import App from './App5.vue'
import mitt from 'mitt';        //npm install --save-dev mitt

import './assets/main.css'

const emitter =  mitt();
emitter.on('*', (type, e) => console.log(`## 이벤트 로그 : ${type} -> `, e) )

const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.mount("#app");
