<template>
    <page-view>
        <shop-car>
            <div class="bg-white ">
                <el-table max-height="600" class="w-full" @selection-change="shopCarTableSelectionChange"
                    :data="myShopCarList" :header-row-style="{height:'70px'}" v-loading="isGetMyShopCarListLoading">
                    <el-table-column type="selection" width="70" align="center" />
                    <el-table-column label="商品图" width="160" min-width="80" align="center">
                        <template #default="{ row }">
                            <el-image style="width: 65px; height: 65px;" :src="row.goodsInfo.goods_photo[0]"
                                :preview-src-list="row.goodsInfo.goods_photo" fit="cover" :z-index="9999"
                                :preview-teleported="true">
                            </el-image>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品名称" min-width="200" prop="goodsInfo.goods_name"></el-table-column>
                    <el-table-column label="单价" width="120" align="center" prop="goodsInfo.goods_sale_price">
                    </el-table-column>
                    <el-table-column label="数量" width="180" align="center">
                        <template #default="{ row }">
                            <el-input-number v-model="row.car_goods_num" :min="1"
                                @change="(currentValue, newValue) => carGoodsNumChange(currentValue, newValue, row)">
                            </el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column label="小计" width="150">
                        <template #default="{ row }">
                            {{ row.goodsInfo.goods_sale_price * row.car_goods_num }}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="90" align="center">
                        <template #default="{ row }">
                            <el-popconfirm title="确定要删除吗" @confirm="deleteShopCar(row.id)">
                                <template #reference>
                                    <el-icon class="cursor-pointer">
                                        <Close />
                                    </el-icon>
                                </template>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="base-width m-auto bg-white  my-5">
                <div class="flex flex-row h-[50px] items-center">
                    <div class="ml-4 text-gray-500 text-[12px] flex">
                        <a @click="$router.push(name = 'HomePage')">继续购物</a>
                        <span class="mx-2">|</span>
                        <div>已选择 <span class="text-primary">{{ selectedRows.length }}</span> 件商品</div>
                    </div>
                    <div class="flex flex-row justify-end items-baseline text-primary flex-1 box-border pr-[20px]">
                        合计：<span class="text-[32px]">{{ totalMoney }}</span> 元
                    </div>
                    <div class="w-[200px] h-full">
                        <el-button type="danger" :disabled="selectedRows.length <= 0" @click="toCheckoutOrder">去结算
                        </el-button>
                    </div>
                </div>
            </div>
        </shop-car>
    </page-view>
</template>

<script setup>
import { Close } from "@element-plus/icons-vue";
import { reactive, ref, inject, computed } from "vue";
import { ElMessage } from "element-plus";
import API from "../../Utils/API";
import { useRoute, useRouter } from "vue-router";
import { mainStore } from "../../store/index";

const store = mainStore();

const baseURL = inject("baseURL");
const router = useRouter();

/**
 * 获取我的购物车数据列表
 */
const myShopCarList = ref([]);
const isGetMyShopCarListLoading = ref(false);
const getMyShopCarList = () => {
    isGetMyShopCarListLoading.value = true;
    API.shopCarInfo.getMyShopCarList()
        .then(result => {
            console.log(result);
            result.forEach(item => {
                item.goodsInfo.goods_photo = JSON.parse(item.goodsInfo.goods_photo).map(item => baseURL + item);
            })
            myShopCarList.value = result;
        })
        .finally(() => {
            isGetMyShopCarListLoading.value = false;
        })
}
getMyShopCarList();

/**
 * 购物车列表里面点击删除操作的事件方法
 * @param id
 */
const deleteShopCar = (id) => {
    API.shopCarInfo.deleteById(id)
        .then(() => {
            getMyShopCarList();
        })
}

/**
 *  购物车表格前面的得选框选中切换事件
 */
const selectedRows = ref([]);
const shopCarTableSelectionChange = (rows) => {
    selectedRows.value = rows;
}

/**
 * 计算属性，购物车总价
 */
const totalMoney = computed(() => {
    let totalMoney = 0;
    selectedRows.value.forEach(item => {
        totalMoney += item.goodsInfo.goods_sale_price * item.car_goods_num;
    })
    return totalMoney.toFixed(2);
})


/**
 * 购物车的数据改变事件
 */
const carGoodsNumChange = (currentValue, oldValue, row) => {
    if (currentValue < oldValue) {
        //购物车数据减少
        API.shopCarInfo.subToShopCar({ goods_id: row.goods_id })
    } else if (currentValue > oldValue) {
        //购物车数据增加
        API.shopCarInfo.addToShopCar({ goods_id: row.goods_id })
    }
}

/**
 * 右上角的下拉菜单点击以后的事件
 */
const dropdownCommand = (command) => {
    if (command === "customCenter") {
        router.push({ name: "CustomInfo" })
    } else if (command === "clientLogOut") {
        clientLogOut();
    }

}
/**
 * 退出登录
 */
const clientLogOut = () => {
    ElMessageBox.confirm("确定要退出登录吗？", "询问", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
    })
        .then(() => {
            store.dispatch("clientLogOut");
        })
        .catch(() => {
            console.log("取消退出登录");
        })
}

/**
 * 去结算
 */
const toCheckoutOrder = () => {
    router.push({ name: "CheckoutOrder", params: { Ids: (selectedRows.value.map(item => item.id)).join(",") } });
}

</script>


<style scoped lang="scss">
:deep(.el-button) {
    @apply w-full h-full
}
</style>