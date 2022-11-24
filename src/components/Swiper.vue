<template>
    <div class="swiper">
        <div class="swiper-box ">
            <div class="h-full">
                <el-carousel :interval="3000" arrow="hover" height="460px">
                    <el-carousel-item v-for="item in imgList" :key="item">
                        <el-image :src="item.src" alt="" loading="lazy" />
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="h-full left-menu">
                <ul class="goods-type">
                    <li v-for="(item, index) in topProductsInfoList" :key="item.id" @mouseenter="currentIndex = index">
                        <a href="#">{{ item.products_name }}</a>
                    </li>
                </ul>
            </div>
            <!--    右边展现出的商品列表-->
            <div class="goods-list" v-for="(item, index) in topProductsInfoList" :key="item.id"
                v-show="currentIndex === index" @mouseleave="currentIndex = -1">
                <div class="goods-item" v-for="g_item in item.goodsList.slice(0, 20)" :key="g_item.id">
                    <img :src="baseURL + g_item.goods_photo[0]" class="goods-img" alt="">
                    <span>{{ g_item.goods_name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from "vue";
import API from "../Utils/API";


const baseURL = inject("baseURL");
// 获取分类产品
const topProductsInfoList = ref([])


const getTopProductsInfoListAndGoods = () => {
    API.productsInfo.getTopProductsInfoListAndGoods()
        .then(result => {
            // console.log(result);
            topProductsInfoList.value = result;
        })
}
getTopProductsInfoListAndGoods();

let currentIndex = ref(-1)

const imgList = [
    {
        src: new URL('../assets/img/l1.webp', import.meta.url).href,
    },
    {
        src: new URL('../assets/img/l2.webp', import.meta.url).href,
    },
    {
        src: new URL('../assets/img/l3.webp', import.meta.url).href,
    },
    {
        src: new URL('../assets/img/l4.webp', import.meta.url).href,
    },
    {
        src: new URL('../assets/img/l5.webp', import.meta.url).href,
    },
    {
        src: new URL('../assets/img/l6.jpg', import.meta.url).href,
    }
]

</script>


<style scoped lang="scss">
.swiper-box {
    position: relative;

    @apply h-[460px];

    .goods-type {
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .5);
        padding: 20px 0;
        width: 234px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        z-index: 2;

        >li {
            height: 40px;
            line-height: 40px;
            padding: 0 15px;
            color: #fff;
            font-size: 14px;
            @apply flex flex-row items-center;

            &:hover {
                background-color: #ff6700;
            }

            a {
                flex: 1;
            }

            &::after {
                content: ">";
                // font-weight: bold;
                font-size: 16px;
            }
        }
    }

    .goods-list {
        position: absolute;
        left: 234px;
        top: 0;
        right: 0;
        height: 100%;
        overflow: hidden;
        z-index: 2;
        background-color: #ffffff;
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(4, 1fr);
        grid-auto-flow: column;
        align-self: center;
        width: min-content;
        box-shadow: 0 0 10px lightgray;

        .goods-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 10px;
            width: 265px;
            height: 76px;
            color: black;
            line-height: 1.7;
            font-size: 14px;

            &:hover {
                color: #ff6700;
                cursor: pointer;
            }

            .goods-img {
                width: 40px;
                height: 40px;
                margin: 0 20px;
            }
        }
    }
}
</style>