import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/shop', component: () => import('@/views/ShopView.vue') },
  { path: '/about', component: () => import('@/views/AboutView.vue') },
  { path: '/auth', component: () => import('@/views/AuthView.vue') },
  { path: '/cart', component: () => import('@/views/CartView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router