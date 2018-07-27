'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  // 知乎数据接口
  // API_ROOT:' http://news-at.zhihu.com/api'

  // 豆瓣数据接口
  // API_ROOT:'http://api.douban.com/v2'
})
