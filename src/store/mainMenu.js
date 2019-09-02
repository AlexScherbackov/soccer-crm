import Vue from 'vue';
import menuItems from './temporary/menuItems.js';

export default {
  namespaced: true,
  state: {
    menuItems: menuItems.data,
  },
  getters: {
    getMenuItems(state) {
      return state.menuItems
    }
  }
}