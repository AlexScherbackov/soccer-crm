import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { routes } from './router/routes.js';

export const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})