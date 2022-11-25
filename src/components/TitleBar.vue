<template>
  <div class="title-bar">
    <header class="flex jsutify-center items-center">
      <div class="title-bar w-full">
        <div class="bg-[#333333] w-full">
          <div class="h-[40px] flex justify-between w-[1226px] mx-auto">
            <ul class="left-box">
              <li>小米商城</li>
              <li>MiUI</li>
              <li>loT</li>
              <li>云服务</li>
              <li>天星数科</li>
              <li>有品</li>
              <li>小爱同学开放</li>
              <li>企业团购</li>
              <li>资质证照</li>
              <li>协议规则</li>
              <li>下载app</li>
              <li>Select Location</li>
            </ul>
            <div class="right-link">
              <template v-if="!loginClientInfo">
                <router-link :to="{ name: 'Login' }">登录</router-link>
                <router-link :to="{ name: 'Register' }">注册</router-link>
              </template>
              <template v-else>
                <router-link :to="{ name: 'CustomCenter' }">欢迎登录：{{ loginClientInfo.custom_realName }}</router-link>
                <a href="javascript:void(0)" @click="clientLogOut">退出登录</a>
              </template>
              <a href="#">消息通知</a>
              <div class="shop-car">购物车<span>(0)</span></div>
            </div>
          </div>
        </div>
        <div class="searcher-box h-[80px] flex w-[1226px] items-center mx-auto justify-between">
          <img src="../assets/img/logo.png" @click="$router.push({ name: 'HomePage' })" class="h-[55px] cursor-pointer">
          <ul class="search-ul">
            <li>Xiaomi手机</li>
            <li>Redmi红米</li>
            <li>电视</li>
            <li>笔记本</li>
            <li>平板</li>
            <li>家电</li>
            <li>路由器</li>
            <li>服务</li>
            <li>社区</li>
          </ul>
          <div class="search-box">
            <input type="text" placeholder="小米手机">
            <div>搜索</div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { mainStore } from "../store"
import { storeToRefs } from "pinia"
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router"
const router = useRouter();
const store = mainStore();
const { loginClientInfo } = storeToRefs(store);



const clientLogOut = () => {
  ElMessageBox.confirm("确定要退出登录吗？", "询问", {
    confirmButtonText: "确定",
    cancelButtonText: "点错了",
    type: "warning",
  })
    .then(() => {
      store.logOut();
      ElMessage({
        type: "success",
        message: "操作成功"
      })
    })
    .catch(() => {
      ElMessage({
        type: "warning",
        message: "已取消操作"
      })
    })
}
</script>



<style scoped lang="scss">
.left-box {
  @apply flex items-center flex-row text-[12px] text-[#b0b0b0];

  >li {
    @apply border-0 border-r-2 border-solid border-[#292929] mr-5 box-border px-5 cursor-pointer;
  }

  >li:hover {
    color: #f26700;
  }
}

.right-link {

  @apply flex flex-row items-center h-full;

  a {
    font-size: 12px;
    padding: 0px 5px;
    color: #b0b0b0;
    outline: none;
    text-decoration: none;
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    &:hover {
      color: #ff6700;
    }
  }

  .shop-car {
    background-color: #424242;
    @apply h-full flex flex-row items-center justify-center px-[16px] text-[12px];

    &:hover {
      background-color: #fff;
    }
  }

  // .shop-car-goods_name {
  //   @apply flex-1;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  //   margin-left: 10px;
  // }
}



.search-ul {
  display: flex;
  font-size: 14px;

  >li {
    box-sizing: border-box;
    margin-right: 20px;
    cursor: pointer;
  }

  >li:hover {
    color: orangered;
  }
}

.search-box {
  font-size: 12px;
  border: 1px solid gray;
  display: flex;

  >input {
    padding: 0 10px;
    height: 40px;
    border: 0;
    outline: none;
    border-right: 1px solid gray;
    width: 260px;
  }

  >input:focus {
    border-right: 1px solid #f26700;
  }

  >div {
    font-size: 14px;
    border-left: 0;
    padding: 5px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>