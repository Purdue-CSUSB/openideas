import Vuex from 'vuex';
import login from './modules/login';

const store = new Vuex.Store({
  modules: {
    login,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
