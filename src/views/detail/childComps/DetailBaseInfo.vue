<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[2]}}</span>
    </div>
    <div class="services">
      <span class="service" :key="index" v-for="(item, index) in goods.services">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-base-info {
  margin: 15px 0 10px;
}

.detail-base-info .title {
  font-size: 16px;
  margin-bottom: 10px;
}

.detail-base-info .price {
  margin-bottom: 10px;
}

.detail-base-info .price .newPrice {
  font-size: 25px;
  color: red;
}

.detail-base-info .price .oldPrice {
  text-decoration: line-through;
  margin: 0px 10px;
}

.detail-base-info .price .discount {
  font-size: 16px;
  border: 1px solid red;
  background-color: red;
  border-radius: 50%;
  color: white;
}

.detail-base-info .columns {
  display: flex;
}

.detail-base-info .columns span {
  flex: 1;
  text-align: center;
  margin-bottom: 10px; 
}

.detail-base-info .services {
  display: flex;
}

.detail-base-info .services .service {
  flex: 1;
  margin: 5px 0px;
  border-top: 0.5px solid #ccc;
  border-bottom: 3px solid #ccc;
  padding: 20px 0;
  text-align: center;
}

.detail-base-info .services .service img {
  width: 10px;
}

.detail-base-info .services .service span {
  font-size: 10px;
}
</style>
