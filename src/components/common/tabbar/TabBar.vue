<template>
  <div>
    <van-tabbar v-model="active" class="tabbar" active-color="#ff5777">
      <van-tabbar-item :key="index" v-for="(item, index) in tabbars" :to="item.path">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: 'home',
          title: '首页',
          path: '/home',
          normal: require('assets/img/tabbar/home.svg'),
          active: require('assets/img/tabbar/home_active.svg')
        },
        {
          name: 'category',
          title: '分类',
          path: '/category',
          normal: require('assets/img/tabbar/category.svg'),
          active: require('assets/img/tabbar/category_active.svg')
        },
        {
          name: 'shopcart',
          title: '购物车',
          path: '/cart',
          normal: require('assets/img/tabbar/shopcart.svg'),
          active: require('assets/img/tabbar/shopcart_active.svg')
        },
        {
          name: 'profile',
          title: '我的',
          path: '/profile',
          normal: require('assets/img/tabbar/profile.svg'),
          active: require('assets/img/tabbar/profile_active.svg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.tabbar {
  background-color: #eee;
}
</style>
