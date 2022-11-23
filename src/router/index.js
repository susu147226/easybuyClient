import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: {
                name: ""
            }
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../view/login.vue"),
        },
        {
            path: "/regiest",
            name: "regiest",
            component: () => import("../view/regiest.vue"),
        },
    ]
});

export default router;