import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import gameIndex from '@/views/gameIndex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/gameIndex',
  },
  {
    path: '/gameIndex',
    name: 'gameIndex',
    component: gameIndex,
  },
  {
    path: '/game',
    name: 'game',
    component: () =>
      import(/* webpackChunkName: "gameIndex" */ '../views/game.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/gameIndex',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
