import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/registracija',
    name: 'RegisterView',
    component: RegisterView,
  },
    {
    path: '/prijava',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
