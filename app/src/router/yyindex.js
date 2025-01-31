import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import phoneLogin from '@/components/phoneLogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/phoneLogin',
      name: 'phoneLogin',
      component: phoneLogin
    }
  ]
})
