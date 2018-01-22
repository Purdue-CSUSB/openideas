const mutations = {
  setUser: (state, user) => {
    state.user = user;
    state.loggedIn = true;
  },
};

export default mutations;
