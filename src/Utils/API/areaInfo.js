import axiosInstance from "../axiosInstance";

const areaInfo = {
    /**
     * 根据父级ID获取地址
     * @param {Object} param0 
     * @returns {Promise<AxiosResponse<any>>}
     */
    getListByParentId( parentId ) {
        return axiosInstance.get(`/area/getListByParentId/${parentId}`, {
            parentId
        });
    },

    /**
     * 获取所有地址列表
     * @returns {Promise<AxiosResponse<any>>}
     */
    getAreaList() {
        return axiosInstance.get(`/area/getAreaList`);
    }
}

export default areaInfo;