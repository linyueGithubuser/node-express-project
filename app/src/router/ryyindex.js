import Vue from 'vue'
import Router from 'vue-router'
import article from '@/components/article'
import articleContent from '@/components/articleContent'
import hole from '@/components/hole'
import index from '@/components/index'



Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/index',
      name: 'index',
      component: index
    },
  ]
})

