<template>
  <div class="cart">
    <!-- navbar -->
    <cart-nav-bar></cart-nav-bar>
    <!-- 轮播开始 -->
    <scroll class="scroll" ref="scroll">
    <!-- 购物车List -->
    <cart-list v-if="cartsList.length !== 0" :carts-list="cartsList"></cart-list>
    <div v-else>
      购物车为空
    </div>
    <!-- 轮播结束 -->
    </scroll>
    <cart-buttom-bar></cart-buttom-bar>
  </div>
</template>

<script>
// scroll
import Scroll from 'components/common/scroll/Scroll'
// navbar
import CartNavBar from './childComps/CartNavBar'
// cartList
import CartList from './childComps/CartList'
// 底部栏
import CartButtomBar from './childComps/CartButtomBar'

export default {
  name: 'Cart',
  data() {
    return {
      cartsList: ''
    }
  },
  components: {
    Scroll,
    CartNavBar,
    CartList,
    CartButtomBar
  },
  created() {
    // 从Vuex中获取数据
    this.cartsList = this.$store.state.cartList
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
  position: relative;
}

.cart .scroll {
  position: absolute;
  top: 46px;
  bottom: 100px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>
