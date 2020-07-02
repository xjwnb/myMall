import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

import { 
  Tabbar, 
  TabbarItem,
  Swipe,
  SwipeItem,
  NavBar,
  Grid,
  GridItem,
  Tab,
  Tabs } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NavBar)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tab)
Vue.use(Tabs)


Vue.config.productionTip = false

Vue.prototype.$toast = toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
