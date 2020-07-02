<template>
  <div class="cart-nav-bar">
    <nav-bar class="navbar">
      <template v-slot:center>
        <div class="navbarText"><span>购物车</span></div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
// NavBar
import NavBar from 'components/content/navbar/NavBar'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.cart-nav-bar .navbar .navbarText span {
  color: white;
}
</style>
