const Vuex = require('vuex');

const store = new Vuex.Store({
  state: {
    user: null,
    loggedIn: false,
  },
});

export default store;
