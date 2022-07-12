import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import contact from '../views/contact.vue'
import bottom from '../views/bottom.vue'
import slide from '../views/slide.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component:login
  },
  {
    path: '/bottom',
    name: 'bottom',
    component:bottom
  },
  {
    path: '/slide',
    name: 'slide',
    component:slide
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:contact

    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
