import Vue from 'vue'
import App from './App.vue'
import { store } from './store.js';
import { router } from './router.js';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
