import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 30000;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
// api映射
Vue.prototype.HOST = '/api'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.method === "post"){
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
// 请求绑定在vue上面，以便使用
Vue.prototype.$http = axios
