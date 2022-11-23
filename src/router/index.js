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
    ]
});

export default router;