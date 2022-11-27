<template>
    <main-container>
        <div class="w-full bg-gray-100">
            <custom-menu class="flex flex-row  w-[1226px] m-auto border border-solid border-black">
                <div class="right-page">
                    <router-view></router-view>
                </div>
            </custom-menu>
        </div>
    </main-container>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import { mainStore } from "../../store/index";
const baseURL = inject("baseURL");

const store = mainStore();
const loginClientInfo = store.loginClientInfo;


console.log(loginClientInfo);


</script>


<style lang="scss" scoped>
.right-page{
    @apply  border border-solid border-black;
}
</style>