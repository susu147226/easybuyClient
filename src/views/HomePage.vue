<template>
    <main-container>
        <page-view>
            <div class="swiper-box ">
                <div class="">
                    <swipe :autoplay="3000" lazy-render touchable="true" indicator-color="white" class="h-full">
                        <swipe-item class="h-full">
                            <img src="../assets/img/l1.webp" />
                        </swipe-item>
                        <swipe-item class="h-full">
                            <img src="../assets/img/l2.webp" />
                        </swipe-item>
                        <swipe-item class="h-full">
                            <img src="../assets/img/l3.webp" />
                        </swipe-item>
                        <swipe-item class="h-full">
                            <img src="../assets/img/l4.webp" />
                        </swipe-item>
                        <swipe-item class="h-full">
                            <img src="../assets/img/l5.webp" />
                        </swipe-item>
                        <swipe-item class="h-full">
                            <img src="../assets/img/l6.jpg" />
                        </swipe-item>
                    </swipe>
                </div>
                <div class="h-full left-menu">
                    <ul>
                        <li>手机</li>
                        <li>电视</li>
                        <li>笔记本</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            
        </page-view>
    </main-container>
</template>


<script setup>
import { ref, reactive } from "vue"
import { Swipe, SwipeItem } from "vant"




</script>

<style  lang="scss" scoped>
.swiper-box {
    position: relative;
    @apply  border border-solid border-black;
    >.left-menu{
        width: 250px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(126, 126,126,0.6);
        z-index: 2;
    }
}
</style>