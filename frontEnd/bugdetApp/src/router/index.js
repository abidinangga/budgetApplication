import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import add from '@/views/addTransaction.vue'
import edit from '@/views/editForm.vue'
import home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
  ]
})

export default router
