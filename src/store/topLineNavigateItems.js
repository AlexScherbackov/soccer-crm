import navigateItems from './temporary/topLineSettings.js';

export default {
  namespaced: true,
  state: {
    topLineNavigateItems: navigateItems.data,
  },
  getters: {
    getTopLineNavigateItems(state) {
      return state.topLineNavigateItems;
    },
  },
}