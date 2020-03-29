import Vue from 'vue'
import Router from 'vue-router'

import article from '@/components/article'
import articleContent from '@/components/articleContent'
import hole from '@/components/hole'
import index from '@/components/index'

//yy
import login from '@/components/login'
import phoneLogin from '@/components/phoneLogin'
import addAdress from '@/components/addAdress'
import adress from '@/components/adress'
import adress1 from '@/components/adress1'
import mySelf from '@/components/mySelf'
import chongzhi from '@/components/chongzhi'
import xieyi from '@/components/xieyi'
import indexBar from '@/components/indexBar'
import home from '@/components/home'
import list from '@/components/list'
import bangdan from '@/components/bangdan'
import indexHeader from '@/components/indexHeader'

//lp
import register from '@/components/register'
import userCenter from '@/components/userCenter'
import order from '@/components/order'
import allOrder from '@/components/allOrder'
import doneOrder from '@/components/doneOrder'
import unDoneOrder from '@/components/unDoneOrder'
import detail from '@/components/detail'
import voucher from '@/components/voucher'
import lucky from '@/components/lucky'

//ly
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

//hyp
import hlist from '@/components/hlist'
import hcake from '@/components/hcake'

//zr
import details from '@/components/details'
import tankuang from '@/components/tankuang'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/articleContent/:articleId',
      name: 'articleContent',
      component: articleContent
    },
    {
      path: '/hole',
      name: 'hole',
      component: hole
    },
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
          component: home
        },
        {
          path: 'list',
          name: 'list',
          component: list
        },
        //{
        //  path: '',
        //  name: 'list',
        //  component: list,
        //},
        //{
        //  path: 'list',
        //  name: 'list',
        //  component: list,
        //}
      ]
    },
    {
      path: '/xieyi',
      name: 'xieyi',
      component: xieyi
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
    {
      path: '/addAdress',
      name: 'addAdress',
      component: addAdress
    },

    {
      path: '/phoneLogin',
      name: 'phoneLogin',
      component: phoneLogin
    },
    {
      path: '/mySelf',
      name: 'mySelf',
      component: mySelf
    },{
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/voucher',
      name: 'voucher',
      component: voucher
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children:[
        { path: 'allOrder',
          name: 'allOrder',
          component: allOrder
        },
        { path: 'doneOrder',
          name: 'doneOrder',
          component: doneOrder
        },
        { path: 'unDoneOrder',
          name: 'unDoneOrder',
          component: unDoneOrder
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/lucky',
      name: 'lucky',
      component: lucky
    },
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
}, {
      path: '/Invoice/Invoice3',
      name: 'Invoice',
      component: Invoice,
      children: [{
        path: '/Invoice/Invoice1',
        name: 'Invoice1',
        component: Invoice1
      }, {
        path: '/Invoice/Invoice2',
        name: 'Invoice2',
        component: Invoice2
      }, {
        path: '/Invoice/Invoice3',
        name: 'Invoice3',
        component: Invoice3
      },
        {
          path: '/',
          name: 'shopCart',
          component: shopCart
        }, {
          path: '/bithdayCard/:index',
          name: 'birthdayCard',
          component: birthdayCard
        }, {
          path: '/shopCart',
          name: 'shopCart',
          component: shopCart
        }, {
          path: '/Coupon',
          name: 'Coupon',
          component: Coupon
        }, {
          path: '/pay',
          name: 'pay',
          component: pay
        }, {
          path: '/address',
          name: 'address',
          component: address
        }, {
          path: '/Edit',
          name: 'Edit',
          component: Edit
        }, {
          path: '/payDo',
          name: 'payDo',
          component: payDo
        }, {
          path: '/Orderdetails',
          name: 'Orderdetails',
          component: Orderdetails
        }, {
          path: '/Invoice/Invoice3',
          name: 'Invoice',
          component: Invoice,
          children: [{
            path: '/Invoice/Invoice1',
            name: 'Invoice1',
            component: Invoice1
          }, {
            path: '/Invoice/Invoice2',
            name: 'Invoice2',
            component: Invoice2
          }, {
            path: '/Invoice/Invoice3',
            name: 'Invoice3',
            component: Invoice3
          }
          ]
        }
      ]
    },
    {
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
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },{
      path: '/tankuang',
      name: 'tankuang',
      component: tankuang
    }

  ]
})
