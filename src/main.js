// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import animate from 'animate.css'
import 'element-ui/lib/theme-chalk/index.css';
//引入vuex
import store from './store'

const BASE_URL = process.env.API_ROOT;
const service = axios.create({
  timeout:10000,
  baseURL:BASE_URL,
  //允许携带cookie
  withCredentials:true
})
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});


new Vue({
  el: '#app',
  router,
  axios,
  store, //使用store
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
