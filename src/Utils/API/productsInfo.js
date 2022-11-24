import axiosInstance from "../axiosInstance";

const productsInfo = {
    /**
     * 获取一级产品信息列表
     * @returns {Promise<Object>}
     */
    getToProductsInfoListAndGoods(){
        return axiosInstance.get("/productsInfo/getToProductsInfoListAndGoods");
    }
}


export default productsInfo;
