// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/http'
import $ from 'jquery'
import './style/bootstrap.css'

// import vPage from 'v-page';


// Vue.use(vPage);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  $,
  components: { App },
  template: '<App/>'
})
