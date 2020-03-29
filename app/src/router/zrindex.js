import Vue from 'vue'
import Router from 'vue-router'
import details from '@/components/details'
import tankuang from '@/components/tankuang'
import shopCart from '@/components/shopCart'

import hlist from '@/components/hlist'
import hcake from '@/components/hcake'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/details',
      name: 'details',
      component: details
    },{
      path: '/tankuang',
      name: 'tankuang',
      component: tankuang
    },{
      path: '/shopCart',
      name: 'shopCart',
      component: shopCart
    },{
      path: '/hlist',
      name: 'hlist',
      component: hlist,
      children:[
        {
          path:'hcake/:id',
          name:'hcake',
          component:hcake
        }
      ]
    }
  ]
})
