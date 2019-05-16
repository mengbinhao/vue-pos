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
        console.log(`enter Pos`)
        next()
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/pages/Home')
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
        requiresLogin: true
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

router.beforeEach((to, from, next) => {
  //console.log(to)
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

router.afterEach((to, from) => {
  console.log(`global after router guard`)
})

export default router