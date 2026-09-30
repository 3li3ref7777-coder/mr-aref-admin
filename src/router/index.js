import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
import AdminLogin from '../views/AdminLogin.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import GradeManagement from '../views/GradeManagement.vue'

const routes = [
  {
    path: '/',
    redirect: '/admin/dashboard', // <-- هذا السطر هو الحل لمشكلة الصفحة البيضاء
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin,
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/grade/:gradeName',
    name: 'GradeManagement',
    component: GradeManagement,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// حماية المسارات
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const isAuthenticated = auth.currentUser

  if (requiresAuth && !isAuthenticated) {
    next('/admin/login')
  } else {
    next()
  }
})

export default router