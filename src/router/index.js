import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Header from '@/views/header'
import Search from '@/views/search'
import Detail from '@/views/detail'
import vueR from '@/vueRouter/index1'
import IndexId from '@/vueRouter/indexId'
import UserName from '@/vueRouter/username'
import Movie from '@/vueRouter/children/movie'
import Music from '@/vueRouter/children/music'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/search/:searchKey',
      name: 'search',
      component: Search
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    // 绝对路径 + 子路由
    {
      path:'/vueR',
      name:"vueR",
      component:vueR,
      children:[
        {
          path:'/vueR/music',
          component:Music
        },
        {
          path:'/vueR/movie',
          name:"movie",
          component:Movie
        }
      ]
    },
    // 动态路由ID
    {
      path:'/IndexId/:id',
      name:"IndexId",
      component:IndexId
    },
    // vue-router 利用url传递参数 :冒号的形式传递参数 在路由配置文件里以:冒号的形式传递参数，这就是对参数的绑定。
    {
      path:'/username/:username/id/:id',
      name:"UserName",
      component:UserName
    }
  ]
})
