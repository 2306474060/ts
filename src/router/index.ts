import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import DEMO from '../views/DEMO.vue'
import topMenu from '../views/topMenu.vue'
import leftMenuBar from '../views/leftMenuBar.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/DEMO',
    name: 'DEMO',
    component: DEMO
  },{
    path: '/leftMenuBar',
    name: 'leftMenuBar',
    component: leftMenuBar
  },
  {
    path: '/topMenu',
    name: 'topMenu',
    component: topMenu
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
