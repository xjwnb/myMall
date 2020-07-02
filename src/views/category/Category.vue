<template>
  <div>
    <!-- nab-bar -->
    <category-nav-bar></category-nav-bar>
    <div class="content">
      <!-- 菜单 -->
      <tab-menu class="menu" :categories="categories" @selectItem="selectItem"></tab-menu>
      <category-right :sub-category="subCategory"></category-right>
    </div>
  </div>
</template>

<script>
// nav-bar
import CategoryNavBar from './childComps/CategoryNavBar'
// 菜单
import TabMenu from './childComps/TabMenu'
// 右边内容
import CategoryRight from './childComps/CategoryRight'

//
import { getCategory, getSubcategory } from 'network/category'

export default {
  name: 'Category',
  components: {
    CategoryNavBar,
    TabMenu,
    CategoryRight
    // CategoryGoodsList,
    // Scroll
  },
  data() {
    return {
      categories: [],
      currentIndex: 0,
      maitKey: [],
      subCategory: []
    }
  },
  created() {
    this.__getCategory()
  },
  methods: {
    // 分类数据
    __getCategory() {
      getCategory().then(res => {
        this.categories = res.data.category.list
        console.log(this.categories)
        this.getMaitKey()
      })
    },
    //

    selectItem(index) {
      this.currentIndex = index
      this.__getSubcategory(index)
    },

    // 遍历this.categories获得maitKey
    getMaitKey() {
      let item
      for (item of this.categories) {
        this.maitKey.push(item.maitKey)
      }
      console.log(this.maitKey)
    },

    // 根据maitKey获取数据
    __getSubcategory(index) {
      const maitkey = this.maitKey[index]
      getSubcategory(maitkey).then(res => {
        this.subCategory = res.data.list
      })
    }
  }
}
</script>

<style scoped>
.content {
  height: 100vh;
  position: relative;
  top: 0px;
  /* display: flex; */
  right: 0;
  left: 0;
  bottom: 50px;
}

.menu {
  width: 30%;
}

.list {
  position: relative;
  width: 70%;
  right: 0;
  left: 30%;
}

.scroll {
  /* width: 70%; */
  /* position: relative; */
  right: 0;
  height: 100vh;
  overflow: hidden;
/*   position: relative;
  top: 0;
  bottom: 50px;
  right: 0;
  overflow: hidden; */
}
</style>
