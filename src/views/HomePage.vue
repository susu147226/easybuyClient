<template>
    <page-view>
        <main-container>
            <div class="swiper-box w-[1226px] mx-auto">
                <div class="h-full">
                    <el-carousel :interval="3000" arrow="hover" height="460px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 text="2xl" justify="center">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="h-full left-menu">
                    <ul class="left-menu-ul">
                        <li>手机<span>></span></li>
                        <li>电视<span>></span></li>
                        <li>笔记本<span>></span></li>
                        <li>冰箱<span>></span></li>
                        <li>出行 穿搭<span>></span></li>
                        <li>移动电源<span>></span></li>
                        <li>数据线<span>></span></li>
                        <li>牙刷<span>></span></li>
                        <li>耳机 音响<span>></span></li>
                        <li>眼镜 背包<span>></span></li>
                    </ul>
                </div>
            </div>

<<<<<<< HEAD
        </page-view>
    </main-container>
=======
        </main-container>
    </page-view>
>>>>>>> 50129e63daf7964b7e5eff2a6b1c96d844b06f25
</template>


<script setup>
import { ref, reactive } from "vue"




</script>

<style  lang="scss" scoped>
.swiper-box {
    position: relative;
<<<<<<< HEAD
    @apply border border-solid border-black;
=======
    @apply h-[460px] border border-solid border-black;
>>>>>>> 50129e63daf7964b7e5eff2a6b1c96d844b06f25

    >.left-menu {
        width: 250px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(126, 126, 126, 0.6);
        z-index: 2;

        .left-menu-ul {
            @apply  box-border py-20  text-[#f1f1f1] text-[14px];
            >li {
                @apply box-border px-10 h-[42px] flex flex-row items-center justify-between hover:bg-[#ff6700];
            }
        }
    }
}



.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>