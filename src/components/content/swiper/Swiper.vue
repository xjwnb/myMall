<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item :key="index" v-for="(item, index) in banners">
        <a :href="item.link">
          <img :src="item.image" alt="item.title">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.my-swipe img {
  width: 100%;
  height: auto;
}
</style>
