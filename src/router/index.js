import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../modules/guest/login/Index.vue'
import Menu from '../modules/authenticated/menu/Index.vue'
import { AUTHENTICATED, NOTAUTHENTICATED } from '@/utilities/middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: NOTAUTHENTICATED
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
    beforeEnter: AUTHENTICATED
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
