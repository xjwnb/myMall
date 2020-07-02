<template>
  <div class="cart-list">
    <cart-list-item :key="index" v-for="(item, index) in cartsList" :carts-list-item="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  props: {
    cartsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>
</style>
