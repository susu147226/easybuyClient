<template>
    <div class="py-6 border-b-2 border-solid my-shop-car-header" v-loading="isSubmitOrderLoading"
        element-loading-text="正在提交订单">
        <div class="base-width m-auto flex flex-row items-center">
            <img src="../../assets/img/Logo.png" class="w-[56px] h-[56px] cursor-pointer" alt=""
                @click="$router.replace({ name: 'HomePage' })">
            <div class="text-[22px] ml-10 flex-1">确认订单</div>
            <div class="self-end">
                <el-dropdown @command="dropdownCommand">
                    <span class="el-dropdown-link text-gray-500 font-bold">
                        {{ loginClientInfo.custom_realName }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="CustomCenter">人个中心</el-dropdown-item>
                            <el-dropdown-item divided command="clientLogOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                    <span class="mx-2 text-gray-400">|</span>
                    <span>我的订单</span>
                </el-dropdown>
            </div>
        </div>
    </div>
    <div class="bg-gray-100 overflow-auto">
        <div class="base-width m-auto mt-[40px] p-[20px] bg-white">
            <h2 class="text-gray-700 text-[18px] my-[10px]">收货地址</h2>
            <el-skeleton animated :loading="isAddressInfoLoading">
                <div class="address-list">
                    <div class="address-item" :class="{ selected: selectedAddressIndex === index }"
                        @click="selectedAddressIndex = index" v-for="(item, index) in myAddressInfoList.listData"
                        :key="item.id">
                        <div class="text-[18px]">{{ item.address_name }}</div>
                        <p class="text-gray-600">{{ item.address_tel.substr(0, 3) + "****" + item.address_tel.slice(-4)
                        }}</p>
                        <p class="address-all">{{ item.province }} {{ item.city }} {{ item.area }} {{
                                item.address_detail
                        }}</p>
                        <el-button type="text" class="absolute right-6 bottom-2">修改</el-button>
                    </div>
                    <div
                        class="h-[200px] flex flex-row justify-center items-center border border-solid border-gray-400 p-6 box-border leading-7">
                        <el-button :icon="CirclePlus" type="text" @click="isShowAddAddressDialog = true">
                            新增地址
                        </el-button>
                    </div>
                </div>
                <div class="flex flex-row h-[40px] justify-center items-center my-5 bg-gray-100 cursor-pointer text-gray-500"
                    @click="getNextPageAddress" v-if="myAddressInfoList.pageIndex < myAddressInfoList.pageCount">
                    加载下一页地址数据
                </div>
            </el-skeleton>
            <el-skeleton animated :loading="isGetCheckoutOrderGoodsLoading">
                <h2 class="text-gray-700 text-[18px] my-[10px]">商品及优惠卷</h2>
                <el-table :data="checkoutOrderGoods" class="w-full">
                    <el-table-column label="编号" width="60" align="center">
                        <template #default="{ $index }">{{ $index + 1 }}</template>
                    </el-table-column>
                    <el-table-column label="图片" width="100" align="center">
                        <template #default="{ row }">
                            <el-image :src="baseURL + row.goodsInfo.goods_photo[0]" class="w-[60px] h-[60px]" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="goodsInfo.goods_name" label="商品名称"></el-table-column>
                    <el-table-column label="价格数量" width="200" align="center">
                        <template #default="{ row }">
                            <span class=" text-[12px]">
                                {{ row.goodsInfo.goods_sale_price }}元 x {{ row.car_goods_num }}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column label="总价" width="120">
                        <template #default="{ row }">
                            <span class="text-primary">{{ row.goodsInfo.goods_sale_price * row.car_goods_num }}</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="flex flex-row h-[80px] items-center border-b border-solid border-gray-200">
                    <h2 class="text-gray-700 text-[18px] my-[10px]">配送方式</h2>
                    <span class="text-primary ml-10 text-[14px]">包邮</span>
                </div>
                <div class="flex flex-row h-[80px] items-center border-b border-solid border-gray-200">
                    <h2 class="text-gray-700 text-[18px] my-[10px]">发票</h2>
                    <span class="text-primary ml-10 text-[14px]">电子普通发票个人商品明细修改 ></span>
                </div>
                <ul class="total-info-ul">
                    <li><span>商品总件数：</span><span class="text-primary">{{ goodsTotalCount }}件</span></li>
                    <li><span>商品总价：</span><span class="text-primary">{{ goodsTotalPrice }}元</span></li>
                    <li><span>活动优惠：</span><span class="text-primary">-0元</span></li>
                    <li><span>优惠券抵扣：</span><span class="text-primary">-0元</span></li>
                    <li><span>运费：</span><span class="text-primary">0元</span></li>
                    <li class="flex flex-row items-end"><span>应付总额：</span><span class="text-primary text-[28px]">{{
                            goodsTotalPrice
                    }}元</span></li>
                </ul>
                <div class="flex flex-row justify-end mt-[20px] box-border">
                    <button type="button" class="w-[180px] h-[40px] border border-solid border-gray-400 text-gray-400"
                        @click="$router.back()">返回购物车
                    </button>
                    <el-button type="danger" @click="confirmSubmitOrder">去结算
                    </el-button>
                </div>
            </el-skeleton>
        </div>
    </div>
    <div class="h-[10px] bg-gray-100"></div>
    <foot-bar />
    <el-dialog v-model="isShowAddAddressDialog" width="700px" title="新增收货地址" :close-on-press-escape="false"
        :close-on-click-modal="false" :destroy-on-close="true">
        <add-address @closeDialog="isShowAddAddressDialog = false" />
    </el-dialog>
</template>
  
<script setup>
import { ArrowDown, CirclePlus } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
import { mainStore } from "../../store";
import { storeToRefs } from "pinia"
import { reactive, ref, watch, inject, computed } from "vue";
import API from "../../Utils/API";
import AddAddress from "../customInfo/AddAddress.vue"
import { useRouter, useRoute } from "vue-router";

const baseURL = inject("baseURL");
const store = mainStore();
const router = useRouter();
const route = useRoute();

const { loginClientInfo } = storeToRefs(store);



const queryAddressData = reactive({
    pageIndex: 1
});
const myAddressInfoList = reactive({
    listData: [],
    pageCount: 0,
    pageEnd: 0,
    pageIndex: 1,
    pageStart: 1,
    totalCount: 0,
})
const isAddressInfoLoading = ref(false);
const getMyAddressInfoListByPage = pageIndex => {
    isAddressInfoLoading.value = true;
    API.addressInfo.getMyAddressInfoList(queryAddressData.pageIndex)
        .then(result => {
            myAddressInfoList.listData = result.listData;
            myAddressInfoList.pageCount = result.pageCount;
            myAddressInfoList.pageEnd = result.pageEnd;
            myAddressInfoList.pageIndex = result.pageIndex;
            myAddressInfoList.pageStart = result.pageStart;
            myAddressInfoList.totalCount = result.totalCount;
        })
        .finally(() => {
            isAddressInfoLoading.value = false;
        });
}
getMyAddressInfoListByPage(queryAddressData.pageIndex);


/**
 * 是否显示新增地址的Dialog
 */
const isShowAddAddressDialog = ref(false);

/**
 * 监听新增地址的dialog,如果关闭了，就刷新数据列表
 */
watch(isShowAddAddressDialog, (newVal, oldVal) => {
    if (newVal === false) {
        getMyAddressInfoListByPage(queryAddressData.pageIndex);
    }
});
/**
 * 地址选中有后的索引
 */
const selectedAddressIndex = ref(-1);

/**
 * 获取下一页地址的数据
 */
const getNextPageAddress = () => {
    if (myAddressInfoList.pageIndex < myAddressInfoList.pageCount) {
        queryAddressData.pageIndex++;
        isAddressInfoLoading.value = true;
        API.addressInfo.getMyAddressInfoList(queryAddressData.pageIndex)
            .then(result => {
                myAddressInfoList.listData = result.listData;
                myAddressInfoList.pageCount = result.pageCount;
                myAddressInfoList.pageEnd = result.pageEnd;
                myAddressInfoList.pageIndex = result.pageIndex;
                myAddressInfoList.pageStart = result.pageStart;
                myAddressInfoList.totalCount = result.totalCount;
            })
            .finally(() => {
                isAddressInfoLoading.value = false;
            });
    }
}

/**
 * 获取确认订单的商品数据
 */

const isGetCheckoutOrderGoodsLoading = ref(false);
const checkoutOrderGoods = ref([]);
const getCheckoutOrderGoodsList = () => {
    isGetCheckoutOrderGoodsLoading.value = true;
    let Ids = route.params.Ids;
    API.shopCarInfo.getMyCheckoutShopCarList(Ids)
        .then(result => {
            result.forEach(item => {
                item.goodsInfo.goods_photo = JSON.parse(item.goodsInfo.goods_photo);
            });
            checkoutOrderGoods.value = result;
        })
        .catch(() => {
            ElMessageBox.alert("获取确认订单的商品数据失败");
        })
        .finally(() => {
            isGetCheckoutOrderGoodsLoading.value = false;
        });
}
getCheckoutOrderGoodsList();

/**
 * 计算订单总商品数
 */
const goodsTotalCount = computed(() => {
    let totalCount = 0;
    checkoutOrderGoods.value.forEach(item => {
        totalCount += item.car_goods_num;
    });
    return totalCount;
});
/**
 * 计算订单总价格
 */
const goodsTotalPrice = computed(() => {
    let totalPrice = 0;
    checkoutOrderGoods.value.forEach(item => {
        totalPrice += item.car_goods_num * item.goodsInfo.goods_sale_price;
    });
    return totalPrice;
});
/**
 * 去结算，确认提交订单
 */
const isSubmitOrderLoading = ref(false);
const confirmSubmitOrder = () => {
    if (selectedAddressIndex.value === -1) {
        ElMessageBox.alert("请选择收货地址", "提示");
        return;
    }
    isSubmitOrderLoading.value = true;
    let orderInfo = {
        address_id: myAddressInfoList.listData[selectedAddressIndex.value].id,
        order_pay_type: 1,
        goodsList: checkoutOrderGoods.value.map(item => {
            return {
                goods_id: item.goods_id,
                goods_num: item.car_goods_num
            }
        })
    }
    API.orderInfo.submitOrder(orderInfo)
        .then(result => {
            router.replace({ name: 'ConfirmOrder', params: { id: result } });
        })
        .catch(() => {
            ElMessageBox.alert("提交订单失败", "提示", {
                type: "error"
            });
        })
        .finally(() => {
            isSubmitOrderLoading.value = false;
        });
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

</script>
  
  
<style scoped lang="scss">
.address-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    .address-item {
        @apply relative h-[200px] border border-solid border-gray-400 p-6 box-border leading-7 cursor-pointer;

        &.selected {
            border-width: 2px;
        }
    }
}

.address-all {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    @apply text-gray-600;
}

.total-info-ul {
    @apply text-gray-600 text-[14px] flex flex-col items-end border-b border-solid border-gray-200 py-[10px];

    >li {
        @apply flex flex-row leading-8;

        span:first-child {
            @apply w-[120px] text-right;
        }

        span:last-child {
            @apply min-w-[120px] text-right;
        }
    }
}


:deep(.el-button) {
    @apply w-[160px] h-[40px] text-white ml-10
}
</style>