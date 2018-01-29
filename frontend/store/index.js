import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
