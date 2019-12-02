import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',//去掉#号
  routes: [
    {
      path: '/login',
      name: '登录',
      component: require('../view/login/login.vue').default,
    },{
      // 主框
      path: '/mainhome',
      name: '主框',
      component: require('../view/index/main.vue').default,
    },{
      // 审批台
      path: '/approvalstage',
      name: '审批台',
      component: require('../view/index/approvalstage.vue').default,
    }
  ]
})
