import axiosInstance from "../axiosInstance";

const adminInfo = {
    /**
     * 用户登录状态检测
     * @param {{zh,custom_pwd}} param0 
     * @returns {Promise<AxiosResponse<any>>}
     */
    checkLogin({ zh, custom_pwd }) {
        return axiosInstance.post(`/customInfo/checkLogin`, {
            zh, custom_pwd
        })
    }
}

export default adminInfo;