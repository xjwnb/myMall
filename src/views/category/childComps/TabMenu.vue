<template>
  <scroll class="scroll-tab-nav">
    <div class="menu-list">
      <div class="menu-list-item" 
           :class="{active: currentIndex === index}" 
           :key="index" 
           v-for="(item, index) in categories"
           @click="itemClick(index)">
           {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'TabMenu',
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    Scroll
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  },
}
</script>

<style scoped>
 .scroll-tab-nav {
  position: absolute;
  width: 30%;
  top: 0;
  bottom: 50px;
  overflow: hidden;
}


.scroll-tab-nav .menu-list .menu-list-item {
  background-color: #eee;
  width: 100%;
  height: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 14px;
}

.menu-list-item.active {
  border-left: 3px solid red;
}
</style>
