<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 实例化BSroll并设置一些配置选项
    const wrapper = this.$refs.wrapper
    this.scroll = new BScroll(wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // scroll事件
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    // 回顶操作方法
    topBack() {
      this.scroll.scrollTo(0, 0, 1000) 
    },

    // refresh刷新
    refresh() {
      this.scroll.refresh()
    },

    // 完成finishPullUp
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  },
}
</script>

<style scoped>
</style>
