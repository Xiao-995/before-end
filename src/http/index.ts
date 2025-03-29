import axios from 'axios'

const instance = axios.create({
    baseURL: "http://127.0.0.1:3007",
    timeout: 5000,
    // 请求头
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
/**
 * 请求拦截器
 */
instance.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

/**
 * 响应拦截器
 */
instance.interceptors.response.use((response) => {
    return response;
}, (error) => {

    return Promise.reject(error)
})
export default instance
