import { createApp } from 'vue'
import App from './App.vue'

// 导入路由 
import router from "./router";

// 导入大菠萝
import { createPinia } from "pinia"
// 导入pinia持久化插件
import PiniaPluginPersistedstate from "pinia-plugin-persistedstate"

// 导入tailwindcss样式配置
import "./assets/css/index.css";
import "./assets/scss/comm.scss";

//导入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

// 导入animatecss样式
import "animate.css"

const app = createApp(App)
const pinia = createPinia()
// 加载持久化插件
pinia.use(PiniaPluginPersistedstate);
// 全局注入baseURL
app.provide("baseURL", baseURL)
// 使用element组件
app.use(ElementPlus);
app.use(ElementPlus, {
    locale: zhCn,
});
// 使用大菠萝
app.use(pinia)
// 使用路由
app.use(router);
app.mount('#app')
