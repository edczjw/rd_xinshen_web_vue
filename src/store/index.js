import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      
  },
  mutations: {
    Tabname(state, platform) {
      state.tabname = platform
    }
  },
  actions: {
    settabname({
      commit
    }, platform) {
      commit('Tabname', platform)
    }
  },
  getters: {
    gettabname: (state) => state.tabname
  }
})
