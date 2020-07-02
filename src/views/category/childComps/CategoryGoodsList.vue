<template>
  <div class="list">
    <category-goods-list-item :key="index" 
                        v-for="(item, index) in subCategory"
                        :goods-list-item="item"></category-goods-list-item>
  </div>
</template>

<script>
import CategoryGoodsListItem from './CategoryGoodsListIItem'

export default {
  name: 'CategoryGoodsList',
  props: {
    subCategory: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CategoryGoodsListItem
  }
}
</script>

<style scoped>
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
