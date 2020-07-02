<template>
  <div class="cart-list-item" v-if="Object.keys(cartsListItem).length !== 0">
    <div class="select">
      <img :src="select" alt @click="selectClick(cartsListItem.iid)" />
    </div>
    <div class="cartImg">
      <img :src="cartsListItem.image" />
    </div>
    <div class="cartInfo">
      <div class="title">{{cartsListItem.title}}</div>
      <div class="price">
        <div class="desc">{{cartsListItem.desc}}</div>
        <div class="empty"></div>
        <div class="count">
          x{{cartsListItem.count}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    cartsListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      // isSelected: false,
      normalImg: require('assets/img/cart/xuanzhong.svg'),
      activeImg: require('assets/img/cart/xuanzhong_active.svg'),
      jian: require('assets/img/cart/jian_active.svg'),
      jia: require('assets/img/cart/jia_active.svg')
    }
  },
  computed: {
    // 图片选中切换
    select() {
      return this.cartsListItem.checked ? this.activeImg : this.normalImg
    }
  },
  methods: {
    // 选不选中
    selectClick(iid) {
      this.cartsListItem.checked = !this.cartsListItem.checked
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  display: flex;
}

.cart-list-item .select img {
  position: relative;
  top: 45px;
  right: 0;
}

.cart-list-item .cartImg img {
  width: 100px;
}

.cart-list-item .cartInfo .title {
  margin: 10px 10px 0px;
}

.cart-list-item .cartInfo .price {
  display: flex;
  margin: 20px 10px 0px;
}

.cart-list-item .cartInfo .price .desc {
  font-size: 20px;
  color: red;
}

.cart-list-item .cartInfo .price .empty {
  flex: 1;
}

.cart-list-item .cartInfo .price .count .counts {
  width: 30px;
  text-align: center;
}
</style>
