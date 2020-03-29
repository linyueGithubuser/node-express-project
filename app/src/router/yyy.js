import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import phoneLogin from '@/components/phoneLogin'
import test from '@/components/test'
import addAdress from '@/components/addAdress'
import switchOk from '@/components/switchOk'
import adress from '@/components/adress'
import adress1 from '@/components/adress1'
import mySelf from '@/components/mySelf'
import chongzhi from '@/components/chongzhi'
import customerMsg from '@/components/customerMsg'
import xieyi from '@/components/xieyi'
import indexBar from '@/components/indexBar'
import home from '@/components/home'
import list from '@/components/list'
import bangdan from '@/components/bangdan'
import indexHeader from '@/components/indexHeader'
Vue.use(Router)

export default new Router({
  routes: [
    //{
    //  path: '/adress1',
    //  name: 'adress1',
    //  component: adress1
    //},
    {
      path: '/indexHeader',
      name: 'indexHeader',
      component: indexHeader
    },
    {
      path: '/bangdan',
      name: 'bangdan',
      component: bangdan
    },
    {
      path: '/indexBar',
      name: 'indexBar',
      component: indexBar,
      children:[
        {
          path: 'home',
          name: 'home',
          component: home,
        },
        {
          path: 'list',
          name: 'list',
          component: list,
        }
      ]
    },
    {
      path: '/xieyi',
      name: 'xieyi',
      component: xieyi
    },
    {
      path: '/customerMsg',
      name: 'customerMsg',
      component: customerMsg
    },
    {
      path: '/adress',
      name: 'adress',
      component: adress
    },
    {
      path: '/chongzhi',
      name: 'chongzhi',
      component: chongzhi
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    //{
    //  path: '/switchOk',
    //  name: 'switchOk',
    //  component: switchOk
    //},
    {
      path: '/addAdress',
      name: 'addAdress',
      component: addAdress
    },
    //{
    //  path: '/test',
    //  name: 'test',
    //  component: test
    //},
    {
      path: '/phoneLogin',
      name: 'phoneLogin',
      component: phoneLogin
    },
    {
      path: '/mySelf',
      name: 'mySelf',
      component: mySelf
    }
  ]
})
