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
    </div>
</template>

<script setup>



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



    >.left-menu {
        width: 234px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(126, 126, 126, 0.6);
        z-index: 2;

        .left-menu-ul {
            @apply box-border py-20 text-[#f1f1f1] text-[14px];

            >li {
                @apply box-border px-10 h-[42px] flex flex-row items-center justify-between;
            }

            >li:hover {
                background-color: #ff6700;
            }
        }
    }
}
</style>