import instance from "../http";

/**
 * 获取用户信息
 * @param {*id}
 */

export const getUserInfoAPI = (id: any) => {
    return instance({
        url: "/api/user/getUserInfo",
        method: "POST",
        data: {
            id
        }
    })
}
/**
 * 用户头像地址绑定账号
 * @param { *onlyid *account *url}
 */
export const bindAccountAPI = (onlyid: any, account: any, url: any) => {
    return instance({
        url: "/api/user/bindAccount",
        method: "POST",
        data: {
            onlyid,
            account,
            url
        }
    })
}
/**
 * 修改密码
 * @param {*id *oldPassword *newPassword}
 */

export const changePasswordAPI = (id: any, oldPassword: string, newPassword: string) => {
    return instance({
        url: "/api/user/changePassword",
        method: "POST",
        data: {
            id,
            oldPassword,
            newPassword
        }
    })
}
/**
 * 修改姓名
 * @param {*name *id}
 */

export const changeNameAPI = (id: any, name: any) => {
    return instance({
        url: "/api/user/changeName",
        method: "POST",
        data: {
            id,
            name
        }
    })
}
/**
 * 修改性别
 * @param {*sex *id}
 */

export const changeSexAPI = (id: any, sex: any) => {
    return instance({
        url: "/api/user/changeSex",
        method: "POST",
        data: {
            id,
            sex
        }
    })
}
/**
 * 修改邮箱
 * @param {*email *id}
 */

export const changeEmailAPI = (id: any, email: any) => {
    return instance({
        url: "/api/user/changeEmail",
        method: "POST",
        data: {
            id,
            email,
        }
    })
}