import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import MainTablePage from '@/pages/MainTablePage.vue'
import DebtorsPage from '@/pages/DebtorsPage.vue'
import CalculationsPage from '@/pages/CalculationsPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { 
    path: '/table', 
    name: 'MainTable', 
    component: MainTablePage,
    meta: { requiresAuth: true } 
  },
  { 
    path: '/debtors', 
    name: 'Debtors', 
    component: DebtorsPage,
    meta: { requiresAuth: true } 
  },
  { 
    path: '/calculations', 
    name: 'Calculations', 
    component: CalculationsPage,
    meta: { requiresAuth: true } 
  },
  { 
    path: '/profile', 
    name: 'Profile', 
    component: ProfilePage,
    meta: { requiresAuth: true } 
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
// router.beforeEach((to, from, next) => {
//   const isProtected = to.matched.some(record => record.meta.requiresAuth)
  

//   const isAuthenticated = false 

//   if (isProtected && !isAuthenticated) {

//     next('/login')
//   } else if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {

//     next('/table')
//   } else {

//     next()
//   }
// })


export default router
