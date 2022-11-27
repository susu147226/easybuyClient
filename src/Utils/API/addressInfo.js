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
    },

    /**
   * 删除一个地址
   * @param {*} param0 
   * @returns 
   */
    deleteById({ id }) {
        return axiosInstance.delete(`/addressInfo/deleteById/${id}`)
    }
}

export default addressInfo;