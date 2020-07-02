<template>
  <div class="detail-nav-bar">
    <nav-bar class="detailNavBar">
      <template v-slot:left class="nav-bar-left">
        <img src="~assets/img/common/back.svg" alt @click="backClick" />
      </template>
      <div slot="center" class="nav-bar-center">
        <div
          class="title-item"
          :class=" currentIndex === index ? 'active' : ''"
          :key="index"
          v-for="(item, index) in titles"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  props: {
    titles: {
      type: Array,
      default() {
        return ['商品', '参数', '评论', '推荐']
      }
    }
  },
  components: {
    NavBar
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    // 回退事件
    backClick() {
      this.$router.back()
    },
    // 导航头部点击事件
    itemClick(index) {
      this.currentIndex = index
      this.$emit('currentClick', index)
    }
  }
}
</script>

<style scoped>
.detailNavBar {
  background-color: greenyellow;
}

.nav-bar-center {
  display: flex;
}

.nav-bar-center .title-item {
  flex: 1;
}

.nav-bar-left img {
  width: 50px;
  height: 50px;
}

.detailNavBar span {
  color: white;
}

.active {
  color: red;
}
</style>
