import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menuItems from './store/mainMenu.js';
import topLineNavigateItems from './store/topLineNavigateItems.js';

const store = new Vuex.Store({
  modules: {
    menuItems,
    topLineNavigateItems,
  }
})

export { store };