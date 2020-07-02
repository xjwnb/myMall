<template>
  <div class="detail">
    <!-- navbar -->
    <detail-nav-bar class="detail-nav-bar" @currentClick="currentClick"></detail-nav-bar>
    <!-- Scroll -start -->
    <scroll class="content" ref="scroll" :probe-type="probeType" @scroll="scroll">
      <!-- 商品swiper -->
      <detail-swiper class="detail-swiper" :top-images="topImages"></detail-swiper>
      <!-- 商品基本信息 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 商家信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 商品图片细节 -->
      <detail-goods-info :goods-info="goodsInfo" @imageLoad="imageLoad"></detail-goods-info>
      <!-- 参数 -->
      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <!-- 评论 -->
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <!-- 推荐 -->
      <goods-list ref="goods" :goods-list="goodsList"></goods-list>
      <!-- Scroll -end -->
    </scroll>
    <!-- 购物栏 -->
    <detail-bottom-bar class="detail-bottom-bar" @addToCart="addToCart"></detail-bottom-bar>
    <!-- 回顶 -->
    <top-back @topBackClick="topBackClick" v-show="showToBack"></top-back>
  </div>
</template>

<script>
// 导入Scroll
import Scroll from 'components/common/scroll/Scroll'
// 导入方法
import { getDetail, Goods, Shop, getRecommend } from 'network/detail'
// 防抖函数
import { debounce } from 'common/util'
// 导入NavBbar
import DetailNavBar from './childComps/DetailNavBar'
// 导入顶部轮播
import DetailSwiper from './childComps/DetailSwiper'
// 导入商品基本信息
import DetailBaseInfo from './childComps/DetailBaseInfo'
// 导入商家基本信息
import DetailShopInfo from './childComps/DetailShopInfo'
// 导入商品图片细节
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
// 参数
import DetailParamInfo from './childComps/DetailParamInfo'
// 评论
import DetailCommentInfo from './childComps/DetailCommentInfo'
// 推荐
import goodsList from 'components/content/goods/GoodsList'
// 购物栏
import DetailBottomBar from './childComps/DetailBottomBar'
// 回顶组件
import TopBack from 'components/common/topBack/TopBack'

export default {
  name: 'Detail',
  components: {
    DetailSwiper,
    Scroll,
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    goodsList,
    DetailBottomBar,
    TopBack
  },
  data() {
    return {
      iid: null,
      probeType: 3,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      newfresh: null,
      paramInfo: {},
      commentInfo: [],
      goodsList: [],
      showToBack: false,
      themeTopYs: []
    }
  },
  created() {
    // 获取路径中的iid
    this.iid = this.$route.query.iid
    // axios根据iid获得数据
    getDetail(this.iid)
      .then(res => {
        // console.log(res)
        const data = res.result
        this.topImages = data.itemInfo.topImages

        // 详情页商品价格栏描述信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        )
        // console.log(this.goods)

        // 店铺信息
        this.shop = new Shop(data.shopInfo)
        // console.log(this.shop)

        // 商品图片细节
        this.goodsInfo = data.detailInfo

        // 参数
        this.paramInfo = data.itemParams

        // 评论
        this.commentInfo = data.rate.list
      })
      .catch(err => {
        console.log(err)
      })

    // 推荐
    getRecommend().then(res => {
      this.goodsList = res.data.list
    })
  },
  methods: {
    // navbar
    currentClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },

    // 图片加载
    imageLoad() {
      // this.$refs.scroll.refresh()
      this.newfresh = debounce(this.$refs.scroll.refresh, 300)
      this.newfresh()

      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
      // console.log(this.themeTopYs)
    },
    // 滚动
    scroll(position) {
      const positionY = position.y
      this.showToBack = positionY <= -1000
    },
    //回顶
    topBackClick() {
      this.$refs.scroll.topBack()
    },
    // 加入购物车
    addToCart() {
      const product = {}
      product.iid = this.iid
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.realPrice

      this.$store.dispatch('addCart', product).then(res => {
        this.$toast({
          message: res,
          duration: 2000
        })
      })
    }
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
}

.detail-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.detail .content {
  overflow: hidden;
  position: absolute;
  top: 46px;
  left: 0;
  right: 0;
  bottom: 50px;
}

.detail-swiper {
  margin-top: 46px;
}

.detail-bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
