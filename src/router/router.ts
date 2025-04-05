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
    // 用户管理
    {
        path: "/user_manage",
        name: "user_manage",
        component: () => import('../layout/index.vue'),
        redirect: '/product',
        meta: {
            title: '用户管理',
            icon: 'Avatar'
        },
        children: [
            {
                path: '/product',
                name: "product",
                component: () => import('../views/user_manage/product/index.vue'),
                meta: {
                    title: '产品管理',
                    icon: 'Document'
                }
            },
            {
                path: '/message',
                name: "message",
                component: () => import('../views/user_manage/message/index.vue'),
                meta: {
                    title: '消息管理',
                    icon: 'Message'
                }
            },
            {
                path: '/user',
                name: "user",
                component: () => import('../views/user_manage/user/index.vue'),
                meta: {
                    title: '用户管理',
                    icon: 'User'
                }
            },
            {
                path: '/userlist',
                name: "userlist",
                component: () => import('../views/user_manage/userlist/index.vue'),
                meta: {
                    title: '用户列表',
                    icon: 'List'
                }
            },
        ]
    }
]