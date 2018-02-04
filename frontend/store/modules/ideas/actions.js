import makeApi from './Api';
import types from './types';

const Ideas = makeApi('/ideas');

const actions = {
  fetchIdeas({ commit }) {
    Ideas.get('/')
      .then((res) => {
        commit(types.mutation.SET_IDEAS, res.data);
        commit(types.mutation.CLEAR_ERROR);
      }).catch(() => commit(types.mutation.SET_ERROR, 'Failed to fetch ideas.'));
  },
  fetchIdeaById() {},
  postIdea({ dispatch, commit }, idea) {
    Ideas.post('/', idea)
      .then(() => dispatch(types.action.FETCH_IDEAS))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to post idea.'));
  },
  postComment() {},
  voteIdeaById() {},
  deleteIdeaById() {},
  editIdeaById() {},
};

export default actions;
