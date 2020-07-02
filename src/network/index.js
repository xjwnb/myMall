import axios from 'axios'

export function request(options) {
  return new Promise((resolve, reject) => {
    // 创建axios实例对象
    const instance = new axios.create({
      // 默认接口
      baseURL: 'http://123.207.32.32:8000/api/hy',
      timeout: 7000
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    })
    // 
    instance(options).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}