import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import hlist from '@/components/hlist'
import hcake from '@/components/hcake'
//import shopCart from '@/components/shopCart'

//import hqiyedz from '@/components/hqiyedz'
//import hxiawuca from '@/components/hxiawuca'
//import hicecream from '@/components/hicecream'

Vue.use(Router);


export default new Router({
  routes: [
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

        //{
        //  path:'hicecream',
        //  name:'hicecream',
        //  component:hicecream
        //},{
        //  path:'hxiawuca',
        //  name:'hxiawuca',
        //  component:hxiawuca
        //},{
        //  path:'hqiyedz',
        //  name:'hqiyedz',
        //  component:hqiyedz
        //}
      ]
    }
    //,
    //{
    //  path: '/shopCart',
    //  name: 'shopCart',
    //  component: shopCart
    //}


  ]
})
