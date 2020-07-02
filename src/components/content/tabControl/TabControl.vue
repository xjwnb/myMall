<template>
  <div class="tab-control">
    <van-tabs @click="click" sticky>
      <van-tab :title="item" :name="title[index]" :key="index" v-for="(item, index) in titles">
        <slot name="goodslitem"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      title: ['pop', 'new', 'sell'],
      currentType: ''
    }
  },
  methods: {
    click(name, title) {
      this.currentType = name
      this.$emit('clickType', this.currentType)
    }
  }
}
</script>

<style scoped>
</style>
