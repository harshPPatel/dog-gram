import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '@/views/Home.view/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.view/index.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.view/index.vue'),
  },
  {
    path: '/breeds/:breed',
    name: 'Breed',
    component: () => import(/* webpackChunkName: "breed" */ '../views/Breed.view/index.vue'),
  },
  {
    path: '/breeds/:breed/:subBreed',
    name: 'SubBreed',
    component: () => import(/* webpackChunkName: "subBreed" */ '../views/SubBreed.view/index.vue'),
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.view/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
