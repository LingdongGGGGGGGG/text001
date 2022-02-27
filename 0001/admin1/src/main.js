/*
 * @Author: your name
 * @Date: 2021-09-11 20:18:17
 * @LastEditTime: 2021-09-11 20:26:25
 * @LastEditors: DESKTOP-TE06U1V
 * @Description: In User Settings Edit
 * @FilePath: \text001\0001\admin1\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')