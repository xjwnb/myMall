<template>
  <div class="navbar">
    <van-nav-bar :title="title">
      <slot name="left"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
van-nav-bar {
  color: white;
}
</style>
