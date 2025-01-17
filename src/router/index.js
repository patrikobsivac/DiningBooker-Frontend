import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import MenuView from '../views/MenuView.vue';
import UserView from '../views/UserView.vue';
import BookingView from '../views/BookingView.vue';
import AlertView from '../views/AlertView.vue';

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
    path: '/izbornik',
    name: 'MenuView',
    component: MenuView,
  },
  {
    path: '/korisnik',
    name: 'UserView',
    component: UserView,
  },
  {
    path: '/bookiraj',
    name: 'BookingView',
    component: BookingView,
  },
  {
    path: '/obavijest',
    name: 'AlertView',
    component: AlertView,
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
