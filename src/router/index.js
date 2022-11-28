import { createRouter, createWebHashHistory } from "vue-router";
import { mainStore } from "../store/index"
import { ElNotification } from 'element-plus'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: {
                name: "HomePage"
            },

        },
        {
            path: "/HomePage",
            name: "HomePage",
            component: () => import("../views/HomePage.vue"),
            meta: {
                title: '首页'
            }
        },
        {
            path: "/Login",
            name: "Login",
            component: () => import("../views/Login.vue"),
            meta: {
                title: '登录'
            }
        },
        {
            path: "/Register",
            name: "Register",
            component: () => import("../views/Register.vue"),
            meta: {
                title: '注册'
            }
        },
        {
            path: "/AddToShopResult/:id",
            name: "AddToShopResult",
            component: () => import("../views/shopCarInfo/AddToShopResult.vue"),
            meta: {
                title: '添加至购物车',
                requireAuth: true
            }
        },
        {
            path: "/MyShopCarList",
            name: "MyShopCarList",
            component: () => import("../views/shopCarInfo/MyShopCarList.vue"),
            meta: {
                title: '我的购物车列表',
                requireAuth: true
            }
        },
        {
            path: "/SearchMoreInfo",
            name: "SearchMoreInfo",
            component: () => import("../views/searchMoreInfoList/SearchMoreInfo.vue"),
            meta: {
                title: '查询更多商品'
            }
        },
        {
            path: "/GoodsDetail/:id",
            name: "GoodsDetail",
            component: () => import("../views/goodsDetail/GoodsDetail.vue"),
            meta: {
                title: '商品详情'
            }
        },
        {
            path: "/CheckoutOrder/:Ids",
            name: "CheckoutOrder",
            component: () => import("../views/customInfo/CheckoutOrder.vue")
        },
        {
            path: "/ConfirmOrder/:id",
            name: "ConfirmOrder",
            component: () => import("../views/shopCarInfo/ConfirmOrder.vue")
        },
        {
            path: "/CustomCenter",
            name: "CustomCenter",
            component: () => import("../views/customInfo/CustomCenter.vue"),
            meta: {
                title: '用户中心',
                requireAuth: true
            },
            children: [
                {
                    path: "CustomInfo",
                    name: "CustomInfo",
                    component: () => import("../views/customInfo/CustomInfo.vue"),
                    meta: {
                        title: "用户信息",
                        requireAuth: true
                    }
                },
                {
                    path: "ChangePwd",
                    name: "ChangePwd",
                    component: () => import("../views/customInfo/ChangePwd.vue"),
                    meta: {
                        title: "修改密码",
                        requireAuth: true
                    }
                },
                {
                    path: "AddressInfoList",
                    name: "AddressInfoList",
                    component: () => import("../views/customInfo/AddressInfoList.vue"),
                    meta: {
                        title: "我的收货地址",
                        requireAuth: true
                    }
                },
                {
                    path: "OrderInfoList",
                    name: "OrderInfoList",
                    component: () => import("../views/customInfo/OrderInfoList.vue"),
                    meta: {
                        title: "我的订单",
                        requireAuth: true
                    }
                }
            ],
        },

    ]
});


/**
 * 前置导航守卫，拦截权限，登录
 */
router.beforeEach((to, from, next) => {
    const store = mainStore();
    if (to.meta.requireAuth) {
        // 需要登录访问
        if (store.token) {
            next();
        } else {
            ElNotification({
                type: "warning",
                title: "系统提示",
                message: "您还没有登录，请先去登录"
            });
            next({
                name: "Login"
            });
        }
    }
    else {
        next();
    }
})


/**
 * 后置导航守卫，用于设置网页标题
 */
router.afterEach((to, from, next) => {
    if (to.meta.title) {
        document.title = "easybuy-" + to.meta.title
    } else {
        document.title = "easybuy-首页"
    }
})


export default router;