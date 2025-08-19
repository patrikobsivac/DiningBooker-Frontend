import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlertView from '../views/AlertView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import UserView from '../views/UserView.vue'
import BookingView from '../views/BookingView.vue'
import MenuView from '../views/MenuView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/obavijest',
    name: 'AlertView',
    component: AlertView
  },
  {
    path: '/user',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/booking',
    name: 'BookingView',
    component: BookingView
  },
    {
    path: '/menu',
    name: 'MenuView',
    component: MenuView
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router