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

export const changeNameAPI = (data: {}) => {
    return instance({
        url: "/api/user/changeName",
        method: "POST",
        data
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

// -------------用户管理-------------
/**
 * 添加管理员
 * @param {*data{} }
 */
export const createAdminAPI = (data: any) => {
    // ES6--rest参数,（形式...变量名）：将多余的参数放入数组中
    const {
        account, ...identity
    } = data
    return instance({
        url: "/api/user/createAdmin",
        method: "POST",
        data: {
            account,
            ...identity
        }
    })
}
/**
 * 获取管理员列表
 * @param {*identity }
 */
export const getAdminListAPI = (identity: string) => {
    return instance({
        url: "/api/user/getAdminList",
        method: "POST",
        data: {
            identity
        }
    })
}
/**
 * 根据部门搜索
 * @param {*department }
 */
export const getDepartmentListAPI = (department: string) => {
    return instance({
        url: "/api/user/getDepartmentList",
        method: "POST",
        data: {
            department
        }
    })
}
/**
 * 获取所有用户列表
 * @param {*identity }
 */
export const getUserListAPI = () => {
    return instance({
        url: "/api/user/getUserList",
        method: "POST",
    })
}

/**
 * 修改管理员账号信息
 * @param {*identity }
 */
export const editAdminAPI = (data: any) => {
    const {
        id,
        ...department
    } = data
    return instance({
        url: "/api/user/editAdmin",
        method: "POST",
        data: {
            id,
            ...department
        }
    })
}

// 降级管理员为用户
export const changeIdentityToUserAPI = (id: string, identity: string) => {
    return instance({
        url: "/api/user/changeIdentityToUser",
        method: "POST",
        data: {
            id, identity
        }
    })
}
// 升级管理员
export const changeIdentityToAdminAPI = () => {
    return instance({
        url: "/api/user/changeIdentityToAdmin",
        method: "POST",
        data: {

        }
    })
}
// 搜索用户
export const searchUserAPI = (account: string) => {
    return instance({
        url: "/api/user/searchUser",
        method: "POST",
        data: {
            account
        }
    })
}
// 冻结用户
export const banUserAPI = (id: number) => {
    return instance({
        url: "/api/user/banUser",
        method: "POST",
        data: {
            id
        }
    })
}
// 解冻用户
export const hotUserAPI = (id: number) => {
    return instance({
        url: "/api/user/hotUser",
        method: "POST",
        data: {
            id
        }
    })
}
// 获取冻结用户列表
export const getBanUsersAPI = () => {
    return instance({
        url: "/api/user/getBanUsers",
        method: "POST",
    })
}
// 删除用户
export const deleteUserAPI = (id: string, account: string) => {
    return instance({
        url: "/api/user/deleteUser",
        method: "POST",
        data: {
            id,
            account
        }
    })
}

// 获取总人数
export const getAdminListLengthAPI = (identity: string) => {
    return instance({
        url: "/api/user/getAdminListLength",
        method: "POST",
        data: {
            identity
        }
    })
}

// 返回详情
export const getListDataAPI = (pager: number, identity: string) => {
    return instance({
        url: "/api/user/getListData",
        method: "POST",
        data: {
            pager,
            identity
        }
    })
}