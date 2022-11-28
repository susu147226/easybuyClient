import axiosInstance from "../axiosInstance";

const addressInfo = {
    /**
     * 获取收货地址信息
     * @param {*} param0 
     * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
   */
    deleteById({ id }) {
        return axiosInstance.delete(`/addressInfo/deleteById/${id}`)
    },
    /**
     * 登录用户新增收获地址
     * @param {{address_name,province,city,area,address_tag,address_tel,address_detail}} param0 
     * @returns {Promise<Object>}
     */
    addMyAddressInfo({ address_name, province, city, area, address_tag, address_tel, address_detail }) {
        return axiosInstance.post("/addressInfo/addMyAddressInfo", {
            address_name, province, city, area, address_tag, address_tel, address_detail
        })
    }
}

export default addressInfo;