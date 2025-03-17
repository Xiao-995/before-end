import instance from "../http";

/**
 * 注册接口
 * @param data 
 * @returns 
 */
export const registerAPI = (data: any) => {
    const { account, password } = data
    return instance({
        url: '/api/register',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}

/**
 * 登录接口
 * @param data 
 * @returns
 */
export const loginAPI = (data: any) => {
    const { account, password } = data
    return instance({
        url: '/api/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}

/**
 * 忘记密码验证
 * @param data
 */
export const verifyAPI = (data: any) => {
    const { account, email } = data
    return instance({
        url: "/api/user/forgetPassword",
        method: 'POST',
        data: {
            account,
            email
        }
    })
}

/**
 * 密码重置
 * @param data
 */
export const resetAPI = (id: any, newPassword: string) => {
    return instance({
        url: "/api/user/changeLoginPassword",
        method: 'POST',
        data: {
            id,
            newPassword
        }
    })
}