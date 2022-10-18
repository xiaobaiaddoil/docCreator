import { createApp } from 'vue'
// import './style.css'
// 2. 引入组件样式
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router';
import store from './store';
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
