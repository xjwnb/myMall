<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
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
.navbar {
  background-color: greenyellow;
  display: flex;
  height: 46px;
  line-height: 46px;
  text-align: center;
}

.left {
  width: 60px;
}

.right {
  width: 60px;
}

.center {
  flex: 1;
}

</style>
