import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/dishes',
      name: 'dishes',
      component: () => import('../views/DishesView.vue')
    },
    {
      path: '/dish/:slug',
      name: 'dish-detail',
      component: () => import('../views/DishDetailView.vue')
    },
    {
      path: '/chef/:id',
      name: 'chef-profile',
      component: () => import('../views/ChefProfileView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      meta: { requiresAuth: true },
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/order/:id',
      name: 'order-tracking',
      meta: { requiresAuth: true },
      component: () => import('../views/OrderTrackingView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

// Navigation guards
router.beforeEach((to, from, next) => {
  const isAuthenticated = false // TODO: Replace with actual auth check from store
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
