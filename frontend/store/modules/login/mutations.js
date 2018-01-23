const mutations = {
  // call these in a component with this.$store.commit('mutation', payload);
  setUser(state, user) {
    state.user = user;
  },
  setLoggedIn(state) {
    state.loggedIn = true;
  },
  setLoggedOut(state) {
    state.user = null;
    state.loggedIn = false;
  },
};

export default mutations;
