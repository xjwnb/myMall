<template>
  <div class="detail-swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item :key="index" v-for="(item, index) in topImages">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.my-swipe {
  height: 300px;
  overflow: hidden;
}

.my-swipe img {
  width: 100%;
}
</style>
