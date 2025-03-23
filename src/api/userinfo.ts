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