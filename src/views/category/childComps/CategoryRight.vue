<template>
  <scroll class="right">
    <category-goods-list :sub-category="subCategory"></category-goods-list>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CategoryGoodsList from './CategoryGoodsList'

export default {
  name: 'CategoryRight',
  props: {
    subCategory: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Scroll,
    CategoryGoodsList
  }
}
</script>

<style scoped>
.right {
  position: absolute;
  right: 0;
  width: 70%;
  height: 100%;
  overflow: hidden;
}
</style>
