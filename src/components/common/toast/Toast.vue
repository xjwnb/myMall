<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
  },
  data() {
    return {
      message: '',
      duration: 3000,
      isShow: false
    }
  },
  mounted() {
    this.isShow = true
    setTimeout(() => {
      this.isShow = false
    }, this.duration)
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  color: white;
  background-color: black;
}
</style>
