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
//element-plus国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import 'element-plus/dist/index.css';


// 导入animatecss样式
import "animate.css"

// 导入了vant样式
import "vant/lib/index.css"

//组件
import FootBar from "./components/FootBar.vue"
import MainContainer from "./components/MainContainer.vue"
import PageView from "./components/PageView.vue"
import PageLogin from "./components/PageLogin.vue";
import TitleBar from "./components/TitleBar.vue"
import Swiper from "./components/Swiper.vue";
import CustomMenu from "./components/CustomMenu.vue";
import ShopCar from "./components/ShopCar.vue";

const app = createApp(App)

const pinia = createPinia()
// 加载持久化插件
pinia.use(PiniaPluginPersistedstate);
// 全局注入baseURL
app.provide("baseURL", baseURL)




// 使用element组件
app.use(ElementPlus, {
    locale: zhCn,
});

//声明全局组件
app.component("page-login", PageLogin);
app.component("page-view", PageView);
app.component("main-container", MainContainer);
app.component("title-bar", TitleBar);
app.component("foot-bar", FootBar);
app.component("swiper", Swiper);
app.component("custom-menu", CustomMenu);
app.component("shop-car", ShopCar);


// 使用大菠萝
app.use(pinia)
// 使用路由
app.use(router);
app.mount('#app')
