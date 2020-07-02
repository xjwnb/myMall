<template>
  <div class="detail-shop-info">
    <div class="logoInfo">
      <!-- <div class="logo"> -->
      <img :src="shop.logo" alt />
      <!-- </div> -->
      <span>{{shop.name}}</span>
    </div>
    <div class="shopInfo">
      <div class="left">
        <div class="count">
          <div class="sells">{{shop.sells | shopSells}}</div>
          <div>总销量</div>
        </div>
        <div class="baby">
          <div class="goodsCount">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div class="score" :key="index" v-for="(item, index) in shop.score">
          <span class="txt">{{item.name}}</span>
          <span class="score">{{item.score}}</span>
          <span class="isBetter"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    shopSells: value => {
      if (value < 1000) return value
      return (value / 1000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.detail-shop-info {
  padding-bottom: 20px;
  border-bottom: 3px solid #ccc;
}

.detail-shop-info .logoInfo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
  vertical-align: middle;
  margin: 10px;
}

.detail-shop-info .shopInfo {
  display: flex;
}

.detail-shop-info .shopInfo .left {
  flex: 1;
  display: flex;
  padding-top: 10px;
  border-right: 1px solid #ccc;
}

.detail-shop-info .shopInfo .count {
  flex: 1;
  text-align: center;
}

.detail-shop-info .shopInfo .baby {
  flex: 1;
  text-align: center;
}

.detail-shop-info .shopInfo .right {
  flex: 1;
  text-align: center;
}
</style>
