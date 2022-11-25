import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: {
                name: "HomePage"
            }
        },
        {
            path: "/HomePage",
            name: "HomePage",
            component: () => import("../views/HomePage.vue")
        },
        {
            path: "/Login",
            name: "Login",
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/Register",
            name: "Register",
            component: () => import("../views/Register.vue"),
        },
        {
            path: "/ShopCarInfoList",
            name: "ShopCarInfoList",
            component: () => import("../views/shopCarInfo/ShopCarInfoList.vue"),
        },
        {
            path: "/SearchMoreInfo",
            name: "SearchMoreInfo",
            component: () => import("../views/searchMoreInfoList/SearchMoreInfo.vue"),
        },
        {
            path:"/GoodsDetail/:id",
            name:"GoodsDetail",
            component:()=>import("../views/goodsDetail/GoodsDetail.vue")
        },
        {
            path:"/CustomCenter",
            name:"CustomCenter",
            component:()=>import("../views/customInfo/CustomCenter.vue")
        }
    ]
});

export default router;