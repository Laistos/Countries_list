import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/tarifCard/tarifCardComponent.vue')
    },
    {
      path: '/about',
      name: 'countries',
      component: () => import('../components/tarifDetails/tarifDetailsComponent.vue')
    }
  ],
})

export default router
