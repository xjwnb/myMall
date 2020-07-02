<template>
  <div class="detail-bottom-bar">
    <van-tabbar class="tabbar" v-model="active" @change="changeItem">
      <van-tabbar-item :key="index" v-for="(item, index) in tabbars" :name="item.name">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" alt />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {
      active: 'kefu',
      tabbars: [
        {
          name: 'kefu',
          title: '客服',
          normal: require('assets/img/detail/kefu.svg'),
          active: require('assets/img/detail/kefu_active.svg')
        },
        {
          name: 'dianpu',
          title: '店铺',
          normal: require('assets/img/detail/diangpu.svg'),
          active: require('assets/img/detail/dianpu_active.svg')
        },
        {
          name: 'shoucang',
          title: '收藏',
          normal: require('assets/img/detail/shoucang.svg'),
          active: require('assets/img/detail/shoucang_active.svg')
        },
        {
          name: 'gouwuce',
          title: '购物车',
          normal: require('assets/img/detail/gouwuche.svg'),
          active: require('assets/img/detail/gouwuche_active.svg')
        },
        {
          name: 'goumai',
          title: '购买',
          normal: require('assets/img/detail/goumai.svg'),
          active: require('assets/img/detail/goumai_active.svg')
        }
      ]
    }
  },
  methods: {
    changeItem(active) {
      switch (active) {
        // 加入购物车
        case 'gouwuce':
          this.$emit('addToCart')
          break
      }
    }
  }
}
</script>

<style scoped>
/*  */
</style>
