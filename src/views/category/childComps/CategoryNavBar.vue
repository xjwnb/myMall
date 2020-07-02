<template>
  <div class="category-nav-bar">
    <nav-bar>
      <template v-slot:center>
        <div class="center">分类</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'

export default {
  name: 'CategoryNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.center {
  color: white;
}
</style>
