<template>
  <div class="cart-buttom-bar">
    <div class="select">
      <check-button class="check" @checkBtnClick="checkBtnClick" :is-checked="isSelectAll"></check-button>
      <!-- <img @click="selectClick" /> -->
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计</span>
      <span>￥{{total}}</span>
    </div>
    <div class="computed">需付款({{total}})</div>
  </div>
</template>

<script>
// checkbutton
import CheckButton from './CheckButton'
import { mapGetters } from 'vuex'

export default {
  name: 'CartButtomBar',
  props: {},
  components: {
    CheckButton
  },
  data() {
    return {
      isSelect: false,
      normalImg: require('assets/img/cart/xuanzhong.svg'),
      activedImg: require('assets/img/cart/xuanzhong_active.svg')
    }
  },
  filters: {
  },
  computed: {
    ...mapGetters(['cartList']),
    // 选中或者不选中
    isSelectAll() {
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    },
    total() {
      const cartList = this.cartList
      return cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.count * item.desc
      }, 0).toFixed(2)
    }
  },
  methods: {
    // 全选
    checkBtnClick() {
      /*let isSelect = this.cartList.find(item => !item.checked)
      if (isSelect) {
        this.cartList.forEach(item => {
          item.checked = true
        })
      } else {
        this.cartList.forEach(item => {
          item.checked = false
        })
      }*/
      if (this.isSelectAll) {
        this.cartList.forEach(item => {
          item.checked = false
        })
      } else {
        this.cartList.forEach(item => {
          item.checked = true
        })
      }

    }
  }
}
</script>

<style scoped>
.cart-buttom-bar {
  width: 100%;
  display: flex;
  height: 50px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 50px;
}

.cart-buttom-bar .select {
  display: flex;
  width: 20%;
  text-align: center;
  line-height: 50px;
  background-color: #eee;
}

.cart-buttom-bar .select .check {
  width: 32px;
  height: 32px;
  position: relative;
  top: 10px;
}

.cart-buttom-bar .select img {
  vertical-align: middle;
}

.cart-buttom-bar .total {
  flex: 1;
  line-height: 50px;
  background-color: #eee;
}

.cart-buttom-bar .computed {
  width: 30%;
  text-align: center;
  line-height: 50px;
  color: white;
  background-color: #09427d;
}
</style>
