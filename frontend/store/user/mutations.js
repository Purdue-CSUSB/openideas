const mutations = {
  setError(state, message) {
    state.error = true;
    state.errorMessage = message;
  },
};

export default mutations;
