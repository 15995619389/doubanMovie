'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  // 本地测试环境请求后台接口的域名
  // API_ROOT:' http://news-at.zhihu.com/api'
})
