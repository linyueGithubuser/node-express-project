
import Vue from 'vue'
import Router from 'vue-router'
import shopCart from '@/components/shopCart'
import birthdayCard from '@/components/birthdayCard'
import Coupon from '@/components/Coupon'
import pay from '@/components/pay'
import address from '@/components/address'
import Edit from '@/components/Edit'
import payDo from '@/components/payDo'
import Orderdetails from '@/components/Orderdetails'
import Invoice from '@/components/Invoice'
import Invoice1 from '@/components/Invoice1'
import Invoice2 from '@/components/Invoice2'
import Invoice3 from '@/components/Invoice3'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shopCart',
      component: shopCart
    },{
      path: '/bithdayCard/:index',
      name: 'birthdayCard',
      component: birthdayCard
    },{
      path: '/shopCart',
      name: 'shopCart',
      component: shopCart
    },{
      path: '/Coupon',
      name: 'Coupon',
      component: Coupon
    },{
      path: '/pay',
      name: 'pay',
      component: pay
    },{
      path: '/address',
      name: 'address',
      component: address
    },{
      path: '/Edit',
      name: 'Edit',
      component: Edit
    },{
      path: '/payDo',
      name: 'payDo',
      component: payDo
    },{
      path: '/Orderdetails',
      name: 'Orderdetails',
      component: Orderdetails
    },{
      path: '/Invoice/Invoice3',
      name: 'Invoice',
      component: Invoice,
      children:[{
        path: '/Invoice/Invoice1',
        name: 'Invoice1',
        component: Invoice1
      },{
        path: '/Invoice/Invoice2',
        name: 'Invoice2',
        component: Invoice2
      },{
        path: '/Invoice/Invoice3',
        name: 'Invoice3',
        component: Invoice3
      }
      ]
    }
  ]
})
