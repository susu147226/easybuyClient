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
     * @param {custom_realName,custom_pwd,custom_tel,custom_email,custom_sex,custom_birthday,custom_addr,custom_photo} param0 
     * @returns {Promise<AxiosResponse<any>>}
     */
    register({ custom_realName, custom_pwd, custom_tel, custom_email, custom_sex, custom_birthday, custom_addr, custom_photo }) {
        return axiosInstance.post(`/customInfo/register`, {
            custom_realName, custom_pwd, custom_tel, custom_email, custom_sex, custom_birthday, custom_addr, custom_photo
        })
    }
}

export default adminInfo;