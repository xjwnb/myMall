<template>
  <div class="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="desc">{{goodsInfo.desc}}</div>
    <div class="detailImage">
      <img
        :key="index"
        v-for="(item, index) in goodsInfo.detailImage[0].list"
        :src="item"
        alt
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  watch: {},
  methods: {
    // 图片加载后事件
    imageLoad() {
      // 判断语句，防止反复执行
      // console.log('嘿嘿和')
      this.$emit('imageLoad')
    }
  }
}
</script>

<style scoped>
.detail-goods-info .desc {
  padding: 10px 5px;
}

.detail-goods-info .detailImage img {
  width: 100%;
}
</style>
