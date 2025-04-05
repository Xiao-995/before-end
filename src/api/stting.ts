import instance from "../http";

/**
 * 获取所有轮播图
 */
export const getAllSwiperAPI = () => {
    return instance({
        url: '/api/user/getAllSwiper',
    })
}

/**
 * 获取公司名称
 */
export const getCompanyNameAPI = () => {
    return instance({
        url: '/api/user/getCompanyName',
    })
}

/**
 * 修改公司名称
 * @param {*set_value}
 */
export const changeCompanyNameAPI = (set_value: any) => {
    return instance({
        url: '/api/user/changeCompanyName',
        method: "post",
        data: {
            set_value
        }
    })
}

/**
 * 编辑公司介绍
 * @param {*set_text *set_name}
 */
export const changeCompanyIntroduceAPI = (set_text: any, set_name: any) => {
    return instance({
        url: '/api/user/changeCompanyIntroduce',
        method: "post",
        data: {
            set_text,
            set_name
        }
    })
}


/**
 * 获取单个公司介绍
 * @param {*set_name}
 */
export const getCompanyIntroduceAPI = (set_name: any) => {
    return instance({
        url: '/api/user/getCompanyIntroduce',
        method: "post",
        data: {
            set_name
        }
    })
}

/**
 * 获取所有公司信息
 */
export const getCompanyAllAPI = () => {
    return instance({
        url: '/api/user/getCompanyAll',
    })
}


/**
 * 部门设置
 */
export const setDepartmentAPI = (set_value: string) => {
    return instance({
        url: '/api/user/setDepartment',
        method: "post",
        data: {
            set_value
        }
    })
}

/**
 * 获取部门
 */
export const getDepartmentAPI = () => {
    return instance({
        url: '/api/user/getDepartment',
    })
}





