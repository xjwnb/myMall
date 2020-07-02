<template>
  <!-- <div> -->
    <div @click="selectItem">
      <img :src="select"/>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      normalImg: require('assets/img/cart/xuanzhong.svg'),
      activedImg: require('assets/img/cart/xuanzhong_active.svg')
    }
  },
  computed: {
    select() {
      return this.isChecked ? this.activedImg : this.normalImg
    }
  },
  methods: {
    selectItem() {
      this.$emit('checkBtnClick')
    }
  },
}
</script>

<style scoped></style>
