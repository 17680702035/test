import { createApp } from 'vue'
import App from './App.vue'
//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

createApp(App).use(ElementPlus,{ locale: zhCn}).mount('#app')
