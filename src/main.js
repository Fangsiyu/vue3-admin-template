import { createApp } from 'vue'
import App from './App.vue'
//全部引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import store from './store'
import router from './router'

//全部引入
// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')

//按需引入
createApp(App).use(router).use(store).mount('#app')
