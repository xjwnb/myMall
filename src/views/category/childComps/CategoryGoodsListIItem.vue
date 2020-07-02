<template>
  <div class="item">
    <a :href="goodsListItem.link">
      <div class="img">
        <img :src="goodsListItem.image" alt />
      </div>
      <div class="title">{{goodsListItem.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CategoryGoodsListItem',
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.item {
  width: 77px;
}
.item .img {
  width: 77px;
}
.item .img img {
  width: 77px;
}

.item .title {
  text-align: center;
  color: black;
}
</style>
