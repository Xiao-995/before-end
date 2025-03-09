import instance from "../http";

// 注册
export const registerAPI = (data: any) => {
    const {
        account,
        password
    } = data
    return instance({
        url: '/api/register',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}

// 登录
export const loginAPI = (data: any) => {
    const {
        account,
        password
    } = data
    return instance({
        url: '/api/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}