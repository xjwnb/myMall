<template>
  <div class="top-back" @click="topBackClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'TopBack',
  methods: {
    topBackClick() {
      this.$emit('topBackClick')
    }
  },
}
</script>

<style scoped>
.top-back {
  position: fixed;
  bottom: 100px;
  right: 0;
}

.top-back img {
  width: 60px;
  height: 60px;
}
</style>
