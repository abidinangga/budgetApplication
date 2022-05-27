import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import add from '@/views/addTransaction.vue'
import edit from '@/views/editForm.vue'
import home from '@/views/home.vue'
import test from '@/views/test.vue'
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
      component: home,
      beforeEnter:(to,from,next)=>{
        if(localStorage.access_token){
          next()
        } else{
          next('/')
        }
      }
    },
    {
      path: '/add',
      name: 'add',
      component: add,
      beforeEnter:(to,from,next)=>{
        if(localStorage.access_token){
          next()
        } else{
          next('/')
        }
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit,
      beforeEnter:(to,from,next)=>{
        if(localStorage.access_token){
          next()
        } else{
          next('/')
        }
      }
    },
  ]
})

export default router
