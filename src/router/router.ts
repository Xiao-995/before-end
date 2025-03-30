export const constantRoute = [
    // 登录
    {
        path: '/login',
        name: "login",
        component: () => import('../views/login/index.vue'),
        meta: {
            title: "登录"
        }
    },
    // 首页
    {
        path: '/',
        name: "layout",
        redirect: "/home",
        component: () => import('../layout/index.vue'),
        meta: {
            title: ''
        },
        children: [
            {
                name: "home",
                path: '/home',
                component: () => import('../views/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: "House",
                }
            },
        ],

    },
    // 系统设置
    {
        path: '/system',
        name: "system",
        component: () => import('../layout/index.vue'),
        redirect: '/set',
        children: [
            {
                path: '/set',
                name: "set",
                component: () => import('../views/set/index.vue'),
                meta: {
                    title: '系统设置',
                    icon: 'Setting'
                }
            },

        ]
    },
    // 系统概览
    {
        path: '/overview',
        name: "overview",
        component: () => import('../layout/index.vue'),
        redirect: '/over',
        children: [
            {
                path: '/over',
                name: "over",
                component: () => import('../views/overview/index.vue'),
                meta: {
                    title: '系统概览',
                    icon: 'Document'
                }
            },

        ]
    },

]