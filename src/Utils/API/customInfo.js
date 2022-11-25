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
    },

    /**
     * 用户注册
     * @param {Object} param0 
     * @returns {Promise<AxiosResponse<any>>}
     */
    register({ custom_realName, custom_pwd, custom_tel, custom_email, custom_sex, custom_birthday, custom_addr, custom_photo }) {
        return axiosInstance.post(`/customInfo/register`, {
            custom_realName, custom_pwd, custom_tel, custom_email, custom_sex, custom_birthday, custom_addr, custom_photo
        })
    },

    /**
     * 判断用户手机号是否已注册
     * @param {Number} param0 
     * @returns {Promise<AxiosResponse<any>>}
     */
    validateCustomTelExists(custom_tel) {
        return axiosInstance.get(`/customInfo/validateCustomTelExists/${custom_tel}`);
    },

    /**
     * 判断用户邮箱是否已注册
     * @param {String} custom_email 
     * @returns {Promise<AxiosResponse<any>>}
     */
    validateCustomEmailExists(custom_email) {
        return axiosInstance.get(`/customInfo/validateCustomEmailExists/${custom_email}`);
    },

    /**
     * 修改我的密码
     * @param {Object} param0 
     * @returns {Promise<AxiosResponse<any>>}
     */
    uploadMyPassword({ oldPassword, newPassword }) {
        return axiosInstance.post(`/customInfo/uploadMyPassword`, { oldPassword, newPassword });
    },
}

export default adminInfo;