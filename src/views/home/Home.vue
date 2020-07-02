<template>
  <div class="home">
    <!-- NavBar标题栏 -->
    <home-nav-bar></home-nav-bar>
    <!-- <tab-control :titles="titles" @clickType="clickType" class="tab-control1" ref="tabControl1"/> -->
    <!-- scroll 开始 -->
    <scroll class="content" ref="scroll" :probe-type="probeType" @scroll="scroll" 
            :pull-up-load="true"
            @pullingUp="loadMore">
      <!-- 轮播图 -->
      <swiper :banners="banners"></swiper>
      <!-- recommends -->
      <home-recommends :recommends="recommends"></home-recommends>
      <!-- tab('流行','新款','精选') -->
      <tab-control :titles="titles" @clickType="clickType" ref="tabControl2">
        <!-- 商品 -->
        <template v-slot:goodslitem>
          <div>
            <goods-list :goodsList="showGoods"></goods-list>
          </div>
        </template>
      </tab-control>
    </scroll>
    <!-- scroll 结束 -->
    <!-- 回顶 -->
    <top-back @topBackClick="topBackClick" v-show="showTopBack"></top-back>
  </div>
</template>

<script>
// NavBar
import HomeNavBar from './chileComps/HomeNavBar'
// 轮播图
import Swiper from 'components/content/swiper/Swiper'
// 四个圆形分类
import HomeRecommends from './chileComps/HomeRecommends'
// 产品
import GoodsList from 'components/content/goods/GoodsList'
// 产品导航控制
import TabControl from 'components/content/tabControl/TabControl'
// 导入BScroll
import Scroll from 'components/common/scroll/Scroll'
// 回顶组件(图片)
import TopBack from 'components/common/topBack/TopBack'

import { getMultiData, getProductData } from 'network/home'

export default {
  name: 'Home',
  components: {
    Swiper,
    HomeNavBar,
    HomeRecommends,
    GoodsList,
    TabControl,
    Scroll,
    TopBack
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: 'pop',
      probeType: 3,
      showTopBack: false,
      scrollY: 0
    }
  },
  computed: {
    // 商品的列表
    showGoods() {
      // console.log(this.goods[this.currentType].list)
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 获得banner数据
    getMultiData().then(res => {
      this.banners = res.data.banner.list

      this.recommends = res.data.recommend.list
      // console.log(res.data)
    })
    /* getMultiData().then(res => {
      
    }) */
    this._getProductData('pop')
    this._getProductData('new')
    this._getProductData('sell')
  },
  activated() {
    // 把scrolTo赋值给scroll
    this.$refs.scroll.scroll.scrollTo(0, this.scrollY, 0)
  },
  deactivated() {
    // 记录转换页面前的scrolY的位置
    this.scrollY = this.$refs.scroll.scroll.y
  },
  mounted() {
    // this.$refs.scroll.
  },
  methods: {
    _getProductData(type) {
      const page = this.goods[type].page
      return getProductData(type, page).then(res => {
        // console.log(res.data.list)
        const newList = res.data.list
        this.goods[type].list.push(...newList)
        this.goods[type].page++

        // 完成上拉刷新
        this.$refs.scroll.finishPullUp()
      })
      
    },
    // 判断tabControl点击
    clickType(name) {
      switch (name) {
        case 'pop':
          this.currentType = 'pop'
          break
        case 'new':
          this.currentType = 'new'
          break
        case 'sell':
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl2.currentType = name
      // console.log(this.currentType)
    },

    // 回顶操作
    topBackClick() {
      // console.log('---')
      this.$refs.scroll.topBack()
    },

    // 监控scroll滚动
    scroll(position) {
      // 控制TopBack的显示隐藏
      const positionY = position.y
      this.showTopBack = positionY <= -1000
    },
    
    // 上拉更新产品数据
    loadMore() {
      this._getProductData(this.currentType)

      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh
}

.content {
  overflow: hidden;
  position: absolute;
  top: 46px;
  bottom: 50px;
  left: 0;
  right: 0;
  
}

.tab-control1 {
  position: relative;
  top: 46px;
  z-index: 2;
}
</style>
