import Vue from 'vue'
import Router from 'vue-router'
import isLogin from './utils/auth'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: () => import('@/components/pages/Pos'),
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/pages/Home'),
      props: { default: true, sidebar: false }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/components/pages/Cart')
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: () => import('@/components/pages/Statistics')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/components/pages/Profile'),
      alias: '/myself',
      meta: {
        requiresLogin: true,
        keepAlive: true //可以结合keep-alive
      }
    },
    {
      path:'/index',
      redirect:'/'
    },
    {
      path:'*',
      component: () => import('@/components/pages/Error')
    }
  ]
})

///globale beforeEach
router.beforeEach((to, from, next) => {
  //to.matched
  if (to.meta.requiresLogin) {
    if (!isLogin()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
  next()
})

//globale afterEach
// router.afterEach((to, from) => {
// })

export default router