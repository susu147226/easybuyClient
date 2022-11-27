<template>
    <div class="custom-menu">
        <div class="item-menu flex flex-col">
            <div class="title"><span class="backHome" @click="$router.replace({ name: 'HomePage' })">首页</span>/个人中心
            </div>
            <div class="flex flex-row">
                <div class="flex flex-col">
                    <ul class="left-menu text-[14px]">
                        <li @click="$router.push({ name: 'CustomInfo' })">个人中心</li>
                        <li @click="$router.push({ name: 'AddressInfoList' })">收货地址</li>
                        <li @click="$router.push({ name: 'OrderInfoList' })">订单列表</li>
                        <li @click="$router.push({ name: 'ChangePwd' })">修改密码</li>
                        <li @click="$router.push({ name: 'MyShopCarList' })">我的购物车</li>
                    </ul>
                </div>
                <div class="flex-1 overflow-auto bg-white ml-20">
                    <slot></slot>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.custom-menu {
    background-color: #f3f4f6;
    border: none;

    .item-menu {
        width: 1226px;
        margin: auto;
    }

    .title {
        @apply my-10;
        font-size: 14px;
        color: #6b86b2;

        .backHome:hover {
            cursor: pointer;
            color: #ff6700;
        }
    }

    .left-menu {
        @apply w-[200px] h-full bg-white p-20;
        // border: 1px solid #f3f4f6;

        li {
            @apply mt-10
        }

        li:hover {
            color: #ff6700;
            cursor: pointer;
        }
    }
}
</style>