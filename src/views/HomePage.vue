<template>
    <page-view>
        <main-container>
            <div class="w-[1226px] mx-auto ">
                <!-- 中间轮播图 -->
                <swiper></swiper>
                <!-- 窗格导航栏 -->
                <div class="home-hero-sub base-width m-auto flex flex-row ">
                    <div class="left-grid">
                        <ul class="home-channel-list overflow-hidden">
                            <li>
                                <a target="_blank" href="#">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&amp;h=48"
                                        alt="保障服务">
                                    保障服务
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&amp;h=48"
                                        alt="企业团购">
                                    企业团购
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&amp;h=48"
                                        alt="F码通道">
                                    F码通道
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&amp;h=48"
                                        alt="米粉卡">
                                    米粉卡
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="//www.mi.com/a/h/16769.html">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&amp;h=48"
                                        alt="以旧换新">
                                    以旧换新
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://recharge.10046.mi.com/">
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&amp;h=48"
                                        alt="话费充值">
                                    话费充值
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- 右边的三个盒子 -->
                    <ul class="right-list flex-1 flex flex-row  pl-[15px]">
                        <li class="first mr-10">
                            <a href="javascript:void(0)">
                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ab8e5096ac6f08bd632e4d5a15d1792.jpg?w=632&amp;h=340"
                                    alt="">
                            </a>
                        </li>
                        <li class=" first mr-10">
                            <a href="javascript:void(0)">
                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5f019908e21571fe48fdad0ebf79249.jpg?w=632&amp;h=340"
                                    alt="">
                            </a>
                        </li>
                        <li class=" first">
                            <a href="javascript:void(0)">
                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c13d0d11b38ec17fa5d83bc6ba5912.jpg?w=632&amp;h=340"
                                    alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="bg-gray-100 w-full">
                <div class="w-[1226px] mx-auto">
                    <!--    中间的间隔-->
                    <div class="base-width m-auto h-[120px] my-[22px] home-banner-box">
                        <a href="javascript:void(0)">
                            <img alt="test" width="1226" height="120"
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e2b43800d3e1ef40470ac04b3e0140b.jpg?thumb=1&amp;w=1226&amp;h=120&amp;f=webp&amp;q=90">
                        </a>
                    </div>
                    <!--商品列表--手机 -->
                    <div class="home-brick-box base-width m-auto py-2">
                        <!-- 商品的标题-->
                        <div class="flex flex-row justify-between h-[50px] items-center">
                            <h2 class="text-[22px] text-gray-700 font-light">手机</h2>
                            <a href="javascript:void(0)" class="flex items-center transition-all hover:text-[#ff6700]">
                                查看更多
                                <el-icon color="#ff6700" style="font-size: 18px;">
                                    <ArrowRight />
                                </el-icon>
                            </a>
                        </div>
                        <div class="goods-grid-box">
                            <div class="goods-grid-item" :class="{ 'last-item': index === 9 }"
                                v-for="(item, index) in phoneList" :key="item.id">
                                <div v-if="item.goods_status === 2 || item.goods_status === 4" class="goods_status"
                                    :class="'goods_status-' + item.goods_status">
                                    {{ ["", "上架", "预售", "正常", "促销"][item.goods_status] }}
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="figure figure-img">
                                        <el-image width="160" height="160" :alt="item.goods_name"
                                            :src="baseURL + item.goods_photo[0]" loading="lazy"
                                            scroll-container="#app" />
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
                            <!--浏览更多-->
                            <a v-if="phoneList.length >= 10" href="javascript:void(0)"
                                class="get-more-info flex flex-row items-center justify-evenly">
                                <div class="flex flex-col ">
                                    <span class="text-[22px]">浏览更多</span>
                                    <span class="text-[12px] text-gray-500">热门</span>
                                </div>
                                <div>
                                    <el-icon color="#ff6700" style="font-size: 36px;">
                                        <ArrowRight />
                                    </el-icon>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!--商品列表--电视 -->
                    <div class="home-brick-box base-width m-auto py-2">
                        <!-- 商品的标题-->
                        <div class="flex flex-row justify-between h-[50px] items-center">
                            <h2 class="text-[22px] text-gray-700 font-light">电视</h2>
                            <a href="javascript:void(0)"
                                class=" transition-all flex items-center hover:text-[#ff6700] ">
                                查看更多
                                <el-icon color="#ff6700" style="font-size: 18px;">
                                    <ArrowRight />
                                </el-icon>
                            </a>
                        </div>
                        <div class="goods-grid-box">
                            <div class="goods-grid-item" :class="{ 'last-item': index === 9 }"
                                v-for="(item, index) in tvList" :key="item.id">
                                <div v-if="item.goods_status === 2 || item.goods_status === 4" class="goods_status"
                                    :class="'goods_status-' + item.goods_status">
                                    {{ ["", "上架", "预售", "正常", "促销"][item.goods_status] }}
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="figure figure-img">
                                        <el-image width="160" height="160" :alt="item.goods_name"
                                            :src="baseURL + item.goods_photo[0]" loading="lazy"
                                            scroll-container="#app" />
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
                            <!--浏览更多-->
                            <a v-if="tvList.length >= 10" href="javascript:void(0)"
                                class="get-more-info flex flex-row items-center justify-evenly">
                                <div class="flex flex-col ">
                                    <span class="text-[22px]">浏览更多</span>
                                    <span class="text-[12px] text-gray-500">热门</span>
                                </div>
                                <div>
                                    <el-icon color="#ff6700" style="font-size: 36px;">
                                        <ArrowRight />
                                    </el-icon>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!--商品列表--笔记本 -->
                    <div class="home-brick-box base-width m-auto py-2">
                        <!-- 商品的标题-->
                        <div class="flex flex-row justify-between h-[50px] items-center">
                            <h2 class="text-[22px] text-gray-700 font-light">笔记本</h2>
                            <a href="javascript:void(0)"
                                class=" transition-all flex items-center hover:text-[#ff6700] ">
                                查看更多
                                <el-icon color="#ff6700" style="font-size: 18px;">
                                    <ArrowRight />
                                </el-icon>
                            </a>
                        </div>
                        <div class="goods-grid-box">
                            <div class="goods-grid-item" :class="{ 'last-item': index === 9 }"
                                v-for="(item, index) in matebookList" :key="item.id">
                                <div v-if="item.goods_status === 2 || item.goods_status === 4" class="goods_status"
                                    :class="'goods_status-' + item.goods_status">
                                    {{ ["", "上架", "预售", "正常", "促销"][item.goods_status] }}
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="figure figure-img">
                                        <el-image width="160" height="160" :alt="item.goods_name"
                                            :src="baseURL + item.goods_photo[0]" loading="lazy"
                                            scroll-container="#app" />
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
                            <!--浏览更多-->
                            <a v-if="matebookList.length >= 10" href="javascript:void(0)"
                                class="get-more-info flex flex-row items-center justify-evenly">
                                <div class="flex flex-col ">
                                    <span class="text-[22px]">浏览更多</span>
                                    <span class="text-[12px] text-gray-500">热门</span>
                                </div>
                                <div>
                                    <ArrowRight class="text-[#ff6700]" style="font-size: 36px" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <!--商品列表--其它 -->
                    <div class="home-brick-box base-width m-auto py-2">
                        <!-- 商品的标题-->
                        <div class="flex flex-row justify-between h-[50px] items-center">
                            <h2 class="text-[22px] text-gray-700 font-light">其它</h2>
                            <a href="javascript:void(0)" class="flex items-center transition-all hover:text-[#ff6700] ">
                                查看更多
                                <el-icon color="#ff6700" style="font-size: 18px;">
                                    <ArrowRight />
                                </el-icon>
                            </a>
                        </div>
                        <div class="goods-grid-box other-goods-grid-box mb-[10px]">
                            <div class="goods-grid-item" v-for="(item, index) in otherList" :key="item.id">
                                <div v-if="item.goods_status === 2 || item.goods_status === 4" class="goods_status"
                                    :class="'goods_status-' + item.goods_status">
                                    {{ ["", "上架", "预售", "正常", "促销"][item.goods_status] }}
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="figure figure-img">
                                        <el-image width="160" height="160" :alt="item.goods_name"
                                            :src="baseURL + item.goods_photo[0]" loading="lazy"
                                            scroll-container="#app" />
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
    </page-view>
</template>


<script setup>
import { ArrowRight } from "@element-plus/icons-vue"
import { ref, reactive, onMounted, inject } from "vue"
import API from "../Utils/API";
const baseURL = inject("baseURL");

// 电话列表
const phoneList = ref([]);
// 电视列表
const tvList = ref([]);
// 笔记本列表
const matebookList = ref([]);
// 其他商品
const otherList = ref([]);

// 具体数据的列表请求
const getGoodSList = () => {
    API.goodsInfo.getListByParentId(1).then(result => {
        // console.log(result);
        phoneList.value = result.slice(0, ~~(result.length / 5) * 5);
    })
    API.goodsInfo.getListByParentId(2).then(result => {
        // console.log(result);
        tvList.value = result.slice(0, ~~(result.length / 5) * 5);
    })
    API.goodsInfo.getListByParentId(3).then(result => {
        // console.log(result);
        matebookList.value = result.slice(0, ~~(result.length / 5) * 5);
    })
    // 其他列表的数据请求
    Promise.all([
        API.goodsInfo.getListByParentId(4),
        API.goodsInfo.getListByParentId(5),
        API.goodsInfo.getListByParentId(6),
        API.goodsInfo.getListByParentId(7),
        API.goodsInfo.getListByParentId(8),
        API.goodsInfo.getListByParentId(9),
        API.goodsInfo.getListByParentId(10)
    ]).then(results => {
        let Otherarr = [];
        for (let item of results) {
            Otherarr.push(...item);
        }
        otherList.value = Otherarr.splice(0, ~~(Otherarr.length / 5) * 5)
    }).catch(error => {
        console.log(error)
    })
}
getGoodSList();





</script>

<style  lang="scss" scoped>
.home-hero-sub {
    height: 170px;
    margin-top: 20px;

    .left-grid {
        width: 234px;
        height: 100%;

        .home-channel-list {
            margin: 0;
            padding: 3px;
            list-style-type: none;
            font-size: 12px;
            text-align: center;
            background: #5f5750;

            >li {
                position: relative;
                float: left;
                width: 70px;
                height: 83px;
                padding: 0 3px;

                &::before {
                    position: absolute;
                    content: "";
                    background: #665e57;
                    top: -1px;
                    left: 6px;
                    width: 64px;
                    height: 1px;
                }

                &::after {
                    position: absolute;
                    content: "";
                    background: #665e57;
                    top: 6px;
                    left: 0;
                    width: 1px;
                    height: 70px;
                }

                a {
                    display: block;
                    padding-top: 18px;
                    text-overflow: ellipsis;
                    color: #fff;
                    opacity: .7;
                    -webkit-transition: opacity .2s;
                    transition: opacity .2s;

                    img {
                        display: block;
                        width: 24px;
                        height: 24px;
                        margin: 0 auto 4px;
                    }
                }
            }
        }
    }
}


.goods-grid-box {
    display: grid;
    //grid-template-rows: repeat(4, 1fr);
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

        &:nth-child(-n+9) {
            grid-row-start: span 2;
        }

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

.other-goods-grid-box {
    .goods-grid-item {
        grid-row-start: span 1 !important;
    }
}
</style>