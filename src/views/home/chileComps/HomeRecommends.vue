<template>
  <div class="recommends">
    <div class="recommends-item" :key="index" v-for="(item, index) in recommends">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGrid',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {}
}
</script>

<style scoped>
.recommends {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}

.recommends-item {
  flex: 1;
  text-align: center;
}

.recommends img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>
