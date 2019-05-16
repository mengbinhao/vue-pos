import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/pages/Pos'
import Home from '@/components/pages/Home'
import Cart from '@/components/pages/Cart'
import Statistics from '@/components/pages/Statistics'
import Profile from '@/components/pages/Profile'
import Error from '@/components/pages/Error'
import isLogin from './utils/auth'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos,
      beforeEnter: (to, from, next) => {
        console.log(`enter Pos`)
        next()
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
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
      component: Error
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