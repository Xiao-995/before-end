import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Menu from '../views/menu/index.vue'
import Home from '../views/home/index.vue'
import Set from '../views/set/index.vue'
// 创建路由
const routes = [
    {
        path: "/",
        redirect: "menu"
    },
    {
        name: "login",
        path: '/login',
        component: Login
    },
    {
        name: "menu",
        path: '/menu',
        component: Menu,
        children: [
            {
                name: "home",
                path: '/home',
                component: Home
            },
            {
                name: "set",
                path: '/set',
                component: Set
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router