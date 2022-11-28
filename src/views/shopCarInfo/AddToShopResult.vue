<template>
    <main-container>
        <div class="bg-gray-100">
            <div class="w-[1226px] m-auto">
                <div
                    class="flex flex-row justify-between items-center border-0 border-b border-gray-200 box-border py-[30px]">
                    <div class="flex flex-row ">
                        <el-icon color="#16a34a" size="56" class="text-white">
                            <SuccessFilled />
                        </el-icon>
                        <div class="flex flex-col ml-10 justify-center">
                            <span class="text-[18px]">添加成功</span>
                            <div class="text-[14px] text-gray-500">
                                您的商品<span class="px-4 text-primaryColor font-bold">{{ queryResultData.goods_name
                                }}</span>已成功添加到购物车</div>
                        </div>
                    </div>
                    <div>
                        <el-button type="primary" @click="$router.replace({ name: 'HomePage' })">继续购物
                        </el-button>
                        <el-button color="#ff6700" size="large" style="color: white;"
                        @click="$router.replace({ name: 'MyShopCarList' })">去购物车结算</el-button>
                    </div>
                </div>
                <div v-loading="isLoading" element-loading-text="数据正在加载...">
                    <div class="flex text-gray-500 justify-center items-center text-[22px] mt-[40px]">其他人还添加了这些到购物车
                    </div>
                    <div class="goods-grid-box py-[20px]">
                        <div class="goods-grid-item" @click="toGoodsDetail(item)"
                            v-for="(item, index) in queryResultData.dataList" :key="item.id">
                            <div v-if="item.goods_status === 2 || item.goods_status === 4" class="goods_status"
                                :class="'goods_status-' + item.goods_status">
                                {{ ["", "上架", "预售", "正常", "促销"][item.goods_status] }}
                            </div>
                            <a href="javascript:void(0)">
                                <div class="figure figure-img">
                                    <el-image width="160" height="160" :alt="item.goods_name"
                                        :src="baseURL + item.goods_photo[0]" loading="lazy" scroll-container="#app" />
                                </div>
                                <div class="text-box">
                                    <h3 class="title">
                                        {{ item.goods_name }}
                                    </h3>
                                    <p class="desc">{{ item.goods_brief_o }}</p>
                                    <p class="price"><span class="num">{{ item.goods_sale_price
                                    }}</span>元<span>起</span>
                                        <del><span class="num">{{ item.goods_price }}</span>元</del>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main-container>
</template>

<script setup>
import { SuccessFilled } from "@element-plus/icons-vue"
import { ref, reactive, inject, onMounted } from "vue"
import API from "../../Utils/API";
import { ElNotification } from 'element-plus'
import { useRouter, useRoute } from "vue-router"


const route = useRoute();
const router = useRouter();

const baseURL = inject("baseURL");
const queryResultData = reactive({
    dataList: [],
    goods_name: ""
})

const findById = (id) => {
    API.goodsInfo.findById(id)
        .then((result) => {
            // console.log(result);
            queryResultData.goods_name = result.goods_name;
        })
}

// 页面跳转到细节页面立即获取id请求数据
(() => {
    let id = route.params.id;
    if (id) {
        findById(id);
    }
})()

const isLoading = ref(false)
const queryData = () => {
    isLoading.value = true;
    API.goodsInfo.getRecommendGoodsList()
        .then(result => {
            // console.log(result);
            result.listData.forEach(item => {
                item.goods_photo = JSON.parse(item.goods_photo);
            })
            queryResultData.dataList = result.listData;
        }).catch(error => {
            console.log(error);
            ElNotification.error({
                title: '提示',
                message: '添加购物车未成功，请重试',
            })
        }).finally(() => {
            isLoading.value = false;
        })
}


// 跳转到商品详情页
const toGoodsDetail = (item) => {
    window.open(router.resolve({ name: "GoodsDetail", params: { id: item.id } }).href);
}

onMounted(() => {
    queryData();
})

</script>

<style lang="scss" scoped>
.goods-grid-box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    grid-auto-flow: row;

    .goods-grid-item {
        position: relative;
        z-index: 1;
        width: 234px;
        background: #fff;
        transition: all .2s linear;
        height: 300px;
        padding: 0;


        &:hover {
            box-shadow: 0 0 10px 5px lightgray;
            transform: translateY(-3px);
        }

        .goods_status {
            @apply text-[12px] absolute left-0 right-0 m-auto px-[8px] py-[2px];
            width: fit-content;
            color: #fff;
            background-color: lightseagreen;

            &-2 {
                background-color: #1abc9c;
            }

            &-4 {
                background-color: #e60012;
            }
        }

        >a {
            display: block;
            height: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 20px 0;

            .figure-img {
                width: 160px;
                height: 160px;
                margin: auto;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .title {
                margin: 0 10px 2px;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 14px;
                font-weight: 400;
                color: #333;
            }

            .desc {
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin: 0 10px 10px;
                height: 18px;
                font-size: 12px;
                color: #b0b0b0;
            }

            .price {
                margin: 0 10px 14px;
                text-align: center;
                color: #ff6700;
                font-size: 14px;

                del {
                    margin-left: .5em;
                    color: #b0b0b0;
                    font-size: 12px;
                }
            }

        }
    }
}
</style>