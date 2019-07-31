import axios from 'axios'
axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/227017/';


// 2.2 请求拦截
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    config.headers['authorization'] = 'adfdsfdsdsf';
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});

// 2.3 响应拦截
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    if (response.code === 200) {
        return response.data
    } else {
        // 对响应错误做点什么 200~400
        return response.data
    }
}, function (error) {
    // 对响应错误做点什么 500
    console.warn('接口请求失败，发送短信报警')
    return Promise.reject(error)
});

export const getArtApi = (apiParams) => {
    return axios({
        method: 'get',
        url: 'api/v1/article',
        params: apiParams 
    })
}