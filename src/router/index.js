import Vue from 'vue'
import VueRouter from 'vue-router'
import page_1 from '../views/page_1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'page_1',
    component: page_1
  },
  {
    path: '/page_2',
    name: 'page_2',
    component: () => import('../views/page_2.vue')
  },
  {
    path: '/page_3',
    name: 'page_3',
    component: () => import('../views/page_3.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
