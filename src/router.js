// 路由字典
import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import reg from './views/reg.vue'
import style1 from './views/style1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/reg',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: reg
    },
    {
      path: '/style1',
      component: style1
    },
    {
      path: "/*",
      components:`<template>
        <div>
          <h1 style="color:red;">404</h1>
        </div>
      </template>`
    }
  ]
})
