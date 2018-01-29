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
  setError(state, message) {
    state.error = true;
    state.errorMessage = message;
  },
  clearError(state) {
    state.error = false;
    state.errorMessage = '';
  },
};

export default mutations;
