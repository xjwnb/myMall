import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {
    cartList(state) {
      return state.cartList
    }
  },
  mutations: {
    addCount(state, data) {
      data.count++
    },
    addToCart(state, data) {
      data.checked = false
      state.cartList.push(data)
    }
  },
  actions: {
    addCart({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        let oldPro = state.cartList.find(item => {
          return item.iid === data.iid
        })
        if (oldPro) {
          commit('addCount', oldPro)
          resolve('商品数量 + 1')
        } else {
          data.count = 1
          commit('addToCart', data)
          resolve('添加商品成功')
        }
      })
    }
  },
  modules: {}
})
