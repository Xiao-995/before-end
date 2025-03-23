import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './router'
// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoute,
    // 滚动
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})

export default router