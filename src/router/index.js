import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
