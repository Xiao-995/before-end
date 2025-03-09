import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Menu from '../views/menu/index.vue'
import Home from '../views/home/index.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
// 创建路由
const routes = [
    {
        path: "/",
        redirect: "login"
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
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router