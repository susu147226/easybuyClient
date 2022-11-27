import axiosInstance from "../axiosInstance";

const addressInfo = {
    /**
     * 获取收货地址信息
     * @param {*} param0 
     * @returns 
     */
    getMyAddressInfoList({ pageIndex }) {
        return axiosInstance.get(`/addressInfo/getMyAddressInfoList`, {
            params: {
                pageIndex
            }
        })
    }
}

export default addressInfo;