import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/pages/Pos'
import Home from '@/components/pages/Home'
import Cart from '@/components/pages/Cart'
import Statistics from '@/components/pages/Statistics'
import Profile from '@/components/pages/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
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
      alias: '/myself'
    },
    {
      path:'/index',
      redirect:'/'
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
