import vueAuth from './auth';

const mutations = {
  // call these in a component with this.$store.commit('mutation', payload);
  setUser(state, user) {
    state.user = user;
  },
  setLoggedIn(state) {
    state.isAuthenticated = vueAuth.isAuthenticated();
  },
  setLoggedOut(state) {
    state.user = null;
    state.isAuthenticated = false;
  },
};

export default mutations;
