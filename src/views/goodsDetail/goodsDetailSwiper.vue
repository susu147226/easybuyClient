<template>
    <swiper
      class="h-full"
      @swiper="onSwiper"
      :modules="[Navigation, Pagination, A11y,Autoplay]"
      :autoplay="{delay: 3000, disableOnInteraction: false}"
      :loop="true"
      navigation
      :pagination="{ clickable: true }"
      @slideChange="onSlideChange">
    <swiper-slide v-for="(item) in goods_photo" :key="item">
      <img :src="baseURL+item" alt="商品图片"/>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import {ref, inject,defineProps} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const baseURL = inject("baseURL");

// 定义展示商品图片的属性
const props = defineProps({
  goods_photo:{
    type:Array,
    default:()=>[],
    required:true
  }
})

const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = () => {
  // console.log('slide change');
};
</script>

<style lang="scss" scoped>

</style>