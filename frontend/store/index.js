import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import ideas from './modules/ideas';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login,
    ideas,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
