<template>
  <div>
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
            <ul class="right-box">
              <li @click="$router.push({ name: 'Login' })">登录</li>
              <li @click="$router.push({name:'Register'})">注册</li>
              <li>消息通知</li>
              <li>购物车<span>(0)</span></li>
            </ul>
          </div>
        </div>
        <div class="searcher-box h-[80px] flex w-[1226px] items-center mx-auto justify-between">
          <img src="../assets/img/logo.png" class="h-[55px] cursor-pointer">
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
    <main>
      <slot></slot>
    </main>
    <footer class="bg-white flex justify-center items-center">

    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.left-box {
  @apply flex items-center flex-row text-[12px] text-[#b0b0b0];

  >li {
    @apply border-0 border-r-2 border-solid border-[#292929] mr-[10px] box-border px-6 cursor-pointer;
  }

  >li:hover {
    color: #f26700;
  }
}

.right-box {
  @apply flex items-center flex-row text-[12px] text-[#b0b0b0];

  >li {
    @apply px-6 border border-0 border-r-2 border-stone-900 cursor-pointer;
  }

  >li:nth-child(4) {
    background-color: #424242;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: none;
  }

  >li:hover {
    color: #f26700;
  }

  >li:nth-child(4):hover {
    background-color: white;
  }
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