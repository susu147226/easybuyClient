<template>
    <page-view>
        <div class="py-6 border-b-2 border-solid my-shop-car-header">
            <div class="base-width m-auto flex flex-row items-end">
                <img src="../assets/img/Logo.png" class="w-[56px] h-[56px] cursor-pointer"
                    @click="$router.replace({ name: 'HomePage' })" alt="">
                <div class="flex-1 ml-10 flex flex-row items-baseline">
                    <div class="text-[22px]">我的购物车</div>
                    <p class="text-[12px] ml-2 text-gray-400">温馨提示：产品是否购买成功，是以最终下单为准哦，请尽快结算</p>
                </div>
            </div>
        </div>
        <slot></slot>
    </page-view>
</template>
<script setup>

</script>
<style scoped lang="scss">
.my-shop-car-header {
    border-color: #ff6a00;
}
</style>