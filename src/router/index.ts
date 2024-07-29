import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import MainView from '@/views/MainView.vue'
import RejectsView from '@/views/RejectsView.vue'
import ReturnsView from '@/views/ReturnsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: MainView
  },
  {
    path: '/rejects',
    name: 'Rejects',
    component: RejectsView
  },
  {
    path: '/returns',
    name: 'Returns',
    component: ReturnsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
