import Vue from 'vue'
import VueRouter from 'vue-router'
import BillingDetails from '@/views/BillingDetails'
import MyCart from '@/views/MyCart'

import ForgetPassword from '@/views/ForgetPassword'

import Home from '@/views/Home'
import Login from '@/views/Login'
import MainPage from '@/views/MainPage'
import Profile from '@/views/Profile'

import Register from '@/views/Register'

import Product_Details from '@/views/Product_Details'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/cart',
    name: 'MyCart',
    component: MyCart,
    
  },
  {
    path: '/product-details',
    name: 'Product_Details',
    component: Product_Details,
  },
  {
    path: '/billing-details',
    name: 'BillingDetails',
    component: BillingDetails,
  },
 
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  
  {
    path: '/home',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/my-profile',
    name: 'Profile',
    component: Profile,
    
  },
  
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})



export default router
