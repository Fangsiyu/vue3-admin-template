import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'


// eslint-disable-next-line no-unused-vars
let loadingInstance = "";

const service = axios.create({
    baseURL: '/',
    timeout: 50000,
    withCredentials: true,
});

service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.showLoading) {
        loadingInstance = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '加载中...',
        })
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (loadingInstance) {
        loadingInstance.close()
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    if (error?.response) {
        switch (error.response.status) {
            case 404:
                error.message = '请求地址出错' + error.response.data.path;
                break;
            case 500:
                error.message = '服务器出错（500）';
                break;
            case 503:
                error.message = '服务不可用（503）';
                break;
            default:
                error.message = '连接错误';
                break;
        }
    }
    ElMessage.error(error.message);
    return Promise.reject(error);
});
//get请求
export const get = (url, data, options = {}) => {
    const mergeOptions = { ...options, showLoading: true };
    return new Promise((resolve, reject) => {
        service({ url, params: data, method: 'get', ...mergeOptions })
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
    });
};

//post请求
export const post = (url, data, options = {}) => {
    const mergeOptions = { ...options, showLoading: true };
    return new Promise((resolve, reject) => {
        service({ url, method: 'post', data, ...mergeOptions })
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
    });
};

export default service;