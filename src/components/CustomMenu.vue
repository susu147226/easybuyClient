<template>
    <page-view>
        <title-bar></title-bar>
        <div class="custom-menu">
            <div class="item-menu flex flex-row">
                <div class="flex flex-col">
                    <span class="title block">首页/个人中心</span>
                    <ul class="left-menu">
                        <li>个人中心</li>
                        <li>收货地址</li>
                        <li>订单列表</li>
                        <li>修改密码</li>
                        <li>我的购物车</li>
                    </ul>
                </div>

                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
        <foot-bar></foot-bar>
    </page-view>
</template>
<script setup>

</script>
<style scoped lang="scss">
.custom-menu {
    background-color: #f3f4f6;

    .item-menu {
        width: 1226px;
        margin: auto;
    }

    .title {
        @apply mt-10 mb-10;
        font-size: 14px;
        color: #6b86b2;
    }

    .left-menu {
        @apply w-[200px] h-full bg-white p-20;
        border: 1px solid #f3f4f6;

        li {
            @apply mt-10
        }

        li:hover {
            color: #ffb452;
            cursor: pointer;
        }
    }
}
</style>