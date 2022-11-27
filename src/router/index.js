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
            path: "/GoodsDetail/:id",
            name: "GoodsDetail",
            component: () => import("../views/goodsDetail/GoodsDetail.vue")
        },
        {
<<<<<<< HEAD
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
=======
            path: "/CustomCenter",
            name: "CustomCenter",
            component: () => import("../views/customInfo/CustomCenter.vue")
        },
        {
            path: "/AddressInfoList",
            name: "AddressInfoList",
            component: () => import("../views/customInfo/AddressInfoList.vue")
        },
        {
            path: "/OrderInfoList",
            name: "OrderInfoList",
            component: () => import("../views/customInfo/OrderInfoList.vue")
>>>>>>> 888edf3400ec4c6c1f8680ab686966ad3fe29ff8
        }
    ]
});

export default router;