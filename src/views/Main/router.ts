import { RouteRecordRaw } from 'vue-router'
import Main from './index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

export default routes;