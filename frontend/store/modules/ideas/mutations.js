const mutations = {
  setIdeas(state, ideas) {
    state.ideas = ideas;
  },
  setIdea(state, idea) {
    state.idea = idea;
  },
  setComments(state, comments) {
    state.comments = comments;
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
