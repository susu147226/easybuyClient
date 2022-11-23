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
            path: "/Login",
            name: "Login",
            component: () => import("../view/Login.vue"),
        },
        {
            path: "/Register",
            name: "Register",
            component: () => import("../view/Register.vue"),
        },
    ]
});

export default router;