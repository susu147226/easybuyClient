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
            path:"/AddToShopResult/:id",
            name:"AddToShopResult",
            component:()=>import("../views/shopCarInfo/AddToShopResult.vue")
        },
        {
            path:"/MyShopCarList",
            name:"MyShopCarList",
            component:()=>import("../views/shopCarInfo/MyShopCarList.vue")
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
            component:()=>import("../views/customInfo/CustomCenter.vue"),
            children:[
                {
                    path:"CustomInfo",
                    name:"CustomInfo",
                    component:()=>import("../views/customInfo/CustomInfo.vue")
                },
                {
                    path:"ChangePwd",
                    name:"ChangePwd",
                    component:()=>import("../views/customInfo/ChangePwd.vue")
                },
            ]
        }
    ]
});

export default router;