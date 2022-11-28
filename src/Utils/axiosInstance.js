import axios from "axios";

import {mainStore} from "../store"



const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});


// 设置请求拦截
axiosInstance.interceptors.request.use(config => {
    const store = mainStore();
    // console.log(store);
    config.headers["easybuy_client_token"] = store.token;

    return config;
})




// 请求响应拦截
axiosInstance.interceptors.response.use(resp => {
    if (resp.data.status === "success") {
        return Promise.resolve(resp.data.data);
    }
    else {
        console.log("请求对的，但是服务器错误", resp.data);
        return Promise.reject(resp.data);
    }
}, error => {
    console.log("服务器请求错误", error);
    if (error.response.status === 403) {
        //说明没有权限了，用户要重新登录
        router.replace({
            name:"Login"
        })
    }
    return Promise.reject(error);
})


export default axiosInstance;