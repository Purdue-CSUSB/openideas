const mutations = {
  setIdeas(state, ideas) {
    state.ideas = ideas;
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
