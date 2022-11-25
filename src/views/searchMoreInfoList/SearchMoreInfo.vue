<template>
    <page-view>
        <main-container>
            <div v-loading="isLoading" element-loading-text="数据正在加载..." class="bg-gray-100 py-10 box-border">
                <div class="base-width m-auto w-[1226px] ">
                    <div class="goods-grid-box my-5">
                        <div class="goods-grid-item" @click="toGoodsDetail(item)" v-for="(item, index) in queryResultData.dataList" :key="item.id">
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
                                    <p class="price"><span class="num">{{ item.goods_sale_price }}</span>元<span>起</span>
                                        <del><span class="num">{{ item.goods_price }}</span>元</del>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="my-[20px] flex flex-row justify-between items-center" v-if="queryResultData.dataList.length > 0">
                        <p class="text-gray-500 text-[14px]">当前共第{{ queryItemData.pageIndex }}页，共{{
                                queryResultData.pageCount
                        }}页，共{{ queryResultData.totalCount }}条</p>
                        <el-pagination background layout="prev, pager, next" :current-page="queryItemData.pageIndex"
                            @current-change="pageChange" :total="queryResultData.totalCount"></el-pagination>
                    </div>
                </div>
            </div>
        </main-container>
    </page-view>
</template>

<script setup>
import { ref, reactive, inject } from "vue"
import API from "../../Utils/API";
import { useRoute, useRouter } from "vue-router"


const router = useRouter();
const route = useRoute();

const baseURL = inject("baseURL");
const queryItemData = reactive({
    pageIndex: 1,
    goods_name: "",
    products_id: "",
})

const queryResultData = reactive({
    dataList: [],
    pageCount: 0,
    pageEnd: 1,
    pageStart: 1,
    totalCount: 0
})

const isLoading = ref(false)
const queryData = () => {
    isLoading.value = true;
    API.goodsInfo.getListByPage(queryItemData)
        .then(result => {
            console.log(result);
            result.listData.forEach(item => {
                item.goods_photo = JSON.parse(item.goods_photo);
            })
            queryResultData.dataList = result.listData;
            queryResultData.pageCount = result.pageCount;
            queryResultData.pageStart = result.pageStart;
            queryResultData.pageEnd = result.pageEnd;
            queryResultData.totalCount = result.totalCount;
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            isLoading.value = false;
        })
}

(() => {
    queryItemData.goods_name = route.query.keyword;
    queryItemData.products_id = route.query.products_id;
    queryData();
})();

// 当页码改变的时候 重新渲染数据
const pageChange = (page) => {
    queryItemData.pageIndex = page;
    // console.log(page);
    queryData();
}


// 跳转到商品详情页
const toGoodsDetail = (item) => {
    window.open(router.resolve({ name: "GoodsDetail", params: { id: item.id } }).href);
}
</script>


<style scoped lang="scss">
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

        &.last-item {
            height: 140px;

            >a {
                display: flex;

                .text-box {
                    width: 60%;
                }
            }

            .figure-img {
                width: 80px;
                height: 80px;
            }

        }
    }

    .get-more-info {
        width: 234px;
        height: 140px;
        grid-column-start: 5;
        grid-column-end: 6;
        background-color: white;
        @extend .goods-grid-item;
    }
}
</style>