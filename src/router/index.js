import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Detail = () => import('views/detail/detail')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
