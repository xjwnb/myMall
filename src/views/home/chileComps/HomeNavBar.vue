<template>
  <div>
    <nav-bar class="center">
      <template v-slot:center>
        <div>
          <span>{{title}}</span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'

export default {
  name: 'HomeNavBar',
  data() {
    return {
      title: '首页'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.center {
  background-color: greenyellow;
}

span {
  color: white;
}
</style>