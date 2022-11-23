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
            path: "/register",
            name: "register",
            component: () => import("../view/register.vue"),
        },
    ]
});

export default router;