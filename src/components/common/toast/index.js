import Toast from './Toast'
import Vue from 'vue'


let toastConstructor = Vue.extend(Toast)
let instance
const toast = function(options = {}) {
  instance = new toastConstructor({
    data: options
  })
  document.body.appendChild(instance.$mount().$el)
}
export default toast
