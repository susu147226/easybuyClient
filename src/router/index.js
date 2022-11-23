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
            path: "Login",
            name: "Login",
            component: () => import("../view/Login.vue"),
        },
        {
            path: "Regiest",
            name: "Regiest",
            component: () => import("../view/Regiest.vue"),
        },
    ]
});

export default router;