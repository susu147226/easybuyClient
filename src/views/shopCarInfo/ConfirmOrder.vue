<template>
    <div v-loading="isLoading" element-loading-text="正在加载数据">
        <div class="py-20 border-b-2 border-solid my-shop-car-header">
            <div class="w-[1226px] m-auto flex flex-row items-center">
                <img src="../../assets/img/Logo.png" class="w-[56px] h-[56px]" alt="">
                <div class="text-[22px] ml-10 flex-1">支付订单</div>
                <div class="self-end flex flex-row items-center">
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
                                <el-dropdown-item divided command="logOut">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                        <span class="mx-2 text-gray-400">|</span>
                    </el-dropdown>
                    <div class="ml-4">
                        <span class="mx-4 text-gray-400" >|</span>
                        <span @click="$router.replace({ name: 'OrderInfoList' })"
                            class="text-[14px] text-gray-600 hover:text-primaryColor cursor-pointer">我的订单</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-100 overflow-auto">
            <div class="w-[1226px] bg-white m-auto mt-[20px] flex flex-row items-center p-[20px]">
                <span class="iconfont icon-chenggong text-green-600" style="font-size: 72px"></span>
                <div class="flex-1 text-[14px] text-gray-600 ml-[20px] leading-8">
                    <p class="text-[22px] text-gray-800">订单提交成功！去支付喽~</p>
                    <p>请在 <span class="text-primary">2小时0分内完成支付，超时后将取消订单</span></p>
                    <p>收货地址：{{ currentOrderInfo.addressInfo?.address_name }}
                        {{ maskTel(currentOrderInfo.addressInfo?.address_tel) }}
                        {{
                                [currentOrderInfo.addressInfo?.province, currentOrderInfo.addressInfo?.city,
                                currentOrderInfo.addressInfo?.area, currentOrderInfo.addressInfo?.address_detail].join(" ")
                        }}</p>
                </div>
                <div class="text-[14px] text-gray-600">
                    <div>订单总金额：<span class="text-primary text-[22px]">{{ totalMoney }}</span><span
                            class="text-primary">元</span></div>
                    <div>订单详情</div>
                </div>
            </div>
            <div class="w-[1226px] bg-white my-[20px] m-auto p-[20px]">
                <h2 class="border-b border-solid border-gray-200 pb-5">请选择以下支付方式支付</h2>
                <div class="pay-type-list">
                    <div class="w-[180px] h-[60px] border border-solid border-gray-200" @click="toAliPay">
                        <img src="../../assets/img/alipay.png" class="block w-full h-full" alt="">
                    </div>
                    <div class="w-[180px] h-[60px] border border-solid border-gray-200">
                        <img src="../../assets/img/wechatpay.jfif" class="block w-full h-full" alt="">
                    </div>
                </div>
            </div>
        </div>
        <foot-bar />
    </div>
</template>
  
<script setup>
import { computed, ref } from "vue";
import { ElMessageBox } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
import API from "@/utils/API";
import { useRoute, useRouter } from "vue-router";
import { maskTel } from "@/utils/stringUtils";
import { mainStore } from "../../store/index";
import { storeToRefs } from "pinia"

const store = mainStore();
const router = useRouter();
const route = useRoute();

const { loginClientInfo } = storeToRefs(store);


/**
 * 根据订单编号查询当前订单的信息
 * @type {Ref<UnwrapRef<boolean>>}
 */
const isLoading = ref(false);
const currentOrderInfo = ref({});
const totalMoney = ref(0);
const findById = id => {
    isLoading.value = true;
    API.orderInfo.findById(id).then(result => {
        currentOrderInfo.value = result;
        result.orderDetailInfoList.forEach(item => {
            totalMoney.value += item.goodsInfo.goods_sale_price * item.goods_num;
        });
    })
        .finally(() => {
            isLoading.value = false;
        });
}
findById(route.params.id);


/**
 * 去调用阿里的支付宝接口
 */
const toAliPay = () => {
    let id = route.params.id;
    if (id) {
        isLoading.value = true;
        API.orderInfo.aliPay(id)
            .then(result => {
                location.href = result;
            })
            .finally(() => {
                isLoading.value = false;
            });
    } else {
        ElMessageBox.alert("订单号不存在，请重新下单", "提示", {
            type: "error"
        })
            .then(() => {
                router.replace({ name: "HomePage" });
            })
    }
}


/**
 * 右上角的下拉菜单点击以后的事件
 */
const dropdownCommand = (command) => {
    if (command === "CustomCenter") {
        router.push({ name: "CustomInfo" })
    } else if (command === "logOut") {
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
            store.logOut();
            router.replace({
                name: "HomePage"
            })
        })
        .catch(() => {
            console.log("取消退出登录");
        })
}
</script>
  
  
<style scoped lang="scss">
.pay-type-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 180px);
    grid-gap: 20px;
    box-sizing: border-box;
    @apply py-[20px];

    >div {
        @apply cursor-pointer transition-all;

        &:hover {
            border-color: #f00;
        }
    }
}
</style>