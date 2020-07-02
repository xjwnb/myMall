<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    TabBar
  }
}
</script>

<style>
</style>
