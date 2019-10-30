import axios from 'axios'

// 创建axios实例
var instance = axios.create({
  timeout: 600000
})

/**
 * 请求拦截器
 */
instance.interceptors.request.use((req) => {
  return req
}, (error) => {
  return Promise.reject(error)
})

/**
 * 响应拦截器
 */
instance.interceptors.response.use((res) => {
  res.status === 200 ? res = Promise.resolve(res) : res = Promise.reject(res)
  return res
}, (error) => {
  const { response } = error
  if (response) {
    return Promise.reject(response)
  }
})

// 允许携带cookie
instance.defaults.withCredentials = true

export default instance
