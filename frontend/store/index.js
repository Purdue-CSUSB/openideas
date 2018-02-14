import Vue from 'vue';
import Vuex from 'vuex';
import login from './login';
import ideas from './ideas';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    login,
    ideas,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
