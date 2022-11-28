<template>
    <main-container v-loading="isLoading" :element-loading-text="loadingText">
        <div class="nav-bar w-full m-auto">
            <div class=" w-[1226px] m-auto flex flex-row items-center h-full justify-between">
                <div class="left flex flex-row items-center">
                    <p class="current-goods-name">{{ goodsDetailData.goods_name }}</p>
                    <span class="text-[12px] text-gray-400 mx-[10px]">|</span>
                    <span class="text-[12px] text-gray-400">{{ goodsDetailData.goods_name }}</span>
                </div>
                <div>
                    <a href="javascript:void(0)" class="text-[14px] hover:text-primaryColor">用户评价</a>
                </div>
            </div>
        </div>
        <div class="h-[50px] bg-gray-100 flex flex-row items-center justify-center">
            <p class="text-[12px]">
                为方便您购买，请提前登录
                <router-link :to="{ name: 'Login' }" class="text-primaryColor mx-2 hover:underline">立即登录</router-link>
            </p>
        </div>
        <!-- 商品展示-->
        <div class=" m-auto flex flex-row mt-20 w-[1226px]">
            <div class="left-swiper-box w-[560px] h-[560px] mr-[40px]">
                <goods-detail-swiper :goods_photo="goodsDetailData.goods_photo"></goods-detail-swiper>
            </div>
            <div class="right-goods-info-box flex-1  box-border p-2">
                <div class="text-[22px] my-6">{{ goodsDetailData.goods_name }}</div>
                <p class="text-[14px] text-gray-400 leading-6">
                    <span class="text-primaryColor">{{ goodsDetailData.goods_brief_o }}</span> {{
                            goodsDetailData.goods_brief
                    }}
                </p>
                <p class="border-b border-solid border-gray-200 py-10">
                    <span class="text-[18px] text-primaryColor">{{ goodsDetailData.goods_sale_price }}元</span>
                <div class="text-gray-400 text-[12px] ml-4"
                    v-if="goodsDetailData.goods_price < goodsDetailData.goods_sale_price">{{
                            goodsDetailData.goods_price
                    }}元
                </div>
                </p>
                <div class="p-10 box-border border border-solid border-gray-200 bg-gray-100">
                    <p class="text-[14px] text-gray-800 flex flex-row items-center">
                        <el-icon size="18" class="mr-2" color="#ff6700">
                            <Location />
                        </el-icon>
                        {{ loginClientInfo ? loginClientInfo.custom_addr : "北京 北京市 海淀区 清河街道" }}
                        <span class="text-primaryColor ml-2 font-bold ">有现货</span>
                    </p>
                </div>
                <div class="my-10" v-for="(item, index) in goodsDetailData.goods_desc" :key="index">
                    <p class="my-4">选择{{ index }}</p>
                    <div class="grid-list">
                        <div class="grid-item" :class="{ active: selectedTypeMap.get(index) === g_index }"
                            v-for="(g_item, g_index) in item" :key="g_item"
                            @click="selectedTypeMap.set(index, g_index)">
                            {{ g_item }}
                        </div>
                    </div>
                </div>
                <!-- 总计信息-->
                <div class="p-10 box-border  bg-gray-100 mt-15">
                    <div class="text-[14px] text-gray-800 flex flex-row items-center justify-between">
                        <p> {{ selected_goods_desc }} </p>
                        <p>
                            <span>{{ goodsDetailData.goods_sale_price }}元</span>
                            <del v-if="goodsDetailData.goods_price < goodsDetailData.goods_sale_price">
                                {{ goodsDetailData.goods_price }}元
                            </del>
                        </p>
                    </div>
                    <div class="text-primaryColor text-[28px] mt-20">
                        总计：{{ goodsDetailData.goods_sale_price }}元
                    </div>
                </div>
                <!--按钮-->
                <div class="flex flex-row my-15">
                    <button type="button" @click="submitAddShopCar"
                        class="border-none outline-none bg-primaryColor text-white flex flex-row justify-center items-center w-[260px] h-[50px]">
                        <el-icon class="mr-4" size="20">
                            <ShoppingCartFull />
                        </el-icon>
                        加入购物车
                    </button>
                    <button type="button"
                        class="border-none outline-none flex flex-row h-[50px] w-[120px] bg-gray-300 text-white justify-center items-center ml-10">
                        <el-icon size="20" class="mr-2">
                            <Sunny />
                        </el-icon>
                        喜欢
                    </button>
                </div>
            </div>
        </div>
        <!--价格说明-->
        <div class="bg-gray-100 mt-5 pt-4 box-border">
            <div class=" m-auto box-border py-4 w-[1226px] mt-[20px]">
                <p class="text-[22px] text-gray-600">价格说明</p>
                <p class="price-item">
                    <span>划线价：</span>商品展示的划横线价格为参考价， 该价格可能是商品首次上市钅肖售价、品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（ 如厂商指导价、建议零售价等）
                    或该商品在小米商城曾经展
                    示过的诮售价； 由于地区、时间的差异性和市场行情的波动， 品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致， 该价格 <span>并非原价、仅供参考。</span>
                </p>
                <p class="price-item">
                    <span>未划线价：</span>指商品的实时诮售价格， 其不因表述的差异改变性质。但商品具体结算价格可能因该商品参与的满减、预售、限时优惠等单个或多个活动，
                    或者因使用优惠券、红包、米金等而发生变化，
                    <span> 请以订单结算页展示为准</span>
                </p>
                <p class="price-item">
                    <span>其它：</span>商品详情页（ 含主图） 以图片或文字形式标注的到手价、券后价、众筹价、尝鲜价等价格可能是商品在使用优惠券或参与特定优惠活动或在特定时间段等情形下，
                    由系统根据相应规则计算得出的预
                    估单品结算价格，<span>具体请以订单结算页面的标价、优惠条件或具体活动规则为准</span>
                </p>
            </div>
        </div>
    </main-container>
</template>


<script setup>
import goodsDetailSwiper from "./goodsDetailSwiper.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { Location, ShoppingCartFull, Pouring, Sunny } from "@element-plus/icons-vue";
import API from "../../Utils/API";
import { mainStore } from "../../store/index";

const store = mainStore();
const route = useRoute();
const router = useRouter();


// 请求商品的细节数据
const goodsDetailData = ref({});
// 用于选择商品的属性
const selectedTypeMap = ref(new Map());
// 加载提示
const loadingText = ref("数据正在加载中...");
const isLoading = ref(false);
const findById = (id) => {
    isLoading.value = true;
    API.goodsInfo.findById(id)
        .then(result => {
            // console.log(result);
            result.goods_desc = JSON.parse(result.goods_desc);
            result.goods_photo = JSON.parse(result.goods_photo);
            goodsDetailData.value = result;
            selectedTypeMap.value = new Map();
            Object.keys(result.goods_desc).forEach(item => {
                selectedTypeMap.value.set(item, 0);
            })
        }).finally(() => {
            isLoading.value = false;
        })
}

// 页面跳转到细节页面立即获取id请求数据
(() => {
    let id = route.params.id;
    if (id) {
        findById(id);
    }
})()


const loginClientInfo = computed(() => store.loginClientInfo);
//渲染选以后的selectTypeMap的内容
const selected_goods_desc = computed(() => {
    if (goodsDetailData.value.goods_desc) {
        let arr = []
        let keys = Object.keys(goodsDetailData.value.goods_desc)
        keys.forEach(key => {
            let selectedIndex = selectedTypeMap.value.get(key);
            arr.push(goodsDetailData.value.goods_desc[key][selectedIndex]);
        })
        return arr.join(" ");
    }
    return "";
});

// 提交到购物车
const submitAddShopCar = () => {
    if (loginClientInfo.value) {
        // 此时说明用户已经登录
        isLoading.value = true;
        loadingText.value = "正在加入购物车..."
        API.shopCarInfo.addToShopCar({ goods_id: goodsDetailData.value.id, custom_id: goodsDetailData.value.products_id })
            .then(result => {
                // console.log(result);
                router.replace({ name: "AddToShopResult", params: { id: goodsDetailData.value.id } })
            }).finally(() => {
                isLoading.value = false;
            })
    }
    else {
        ElMessageBox.alert("您还没有登录，请先去登录", "提示", {
            type: "info",
            confirmButtonText: "现在去登录",
            cancelButtonText: "算了等一会",
            showCancelButton: true,
        }).then(result => {
            ElMessage({
                type: "success",
                message: "操作成功"
            })
            router.push({
                name: 'Login',
                query: {
                    redirectPath: route.fullPath
                }
            })
        }).catch(() => {

        });
    }
}

</script>


<style lang="scss" scoped>
.nav-bar {
    height: 60px;
    box-shadow: 0 2px 5px lightgray;

}

.grid-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    .grid-item {
        @apply border border-solid border-gray-200 text-[14px] text-gray-800 p-20 h-[50px] flex flex-row items-center justify-center cursor-pointer;

        &.active {
            color: #ff6700;
            border-color: #ff6700;
        }
    }

}

.price-item {
    @apply text-gray-400 text-[14px] my-20;
    line-height: 1.7;
    user-select: none;

    span {
        @apply text-gray-600 font-bold;
    }
}
</style>