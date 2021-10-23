import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from '@/views/Main/router';

const routes: Array<RouteRecordRaw> = [
    ...main,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
