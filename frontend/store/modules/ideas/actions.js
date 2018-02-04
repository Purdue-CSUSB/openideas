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
  fetchIdeaById({ commit }, id) {
    Ideas.get(`/${id}`)
      .then((res) => {
        commit(types.mutation.SET_IDEA, res.data);
        commit(types.mutation.CLEAR_ERROR);
      }).catch(() => commit(types.mutation.SET_ERROR, 'Failed to fetch idea.'));
  },
  postIdea({ dispatch, commit }, idea) {
    Ideas.post('/', idea)
      .then(() => dispatch(types.action.FETCH_IDEAS))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to post idea.'));
  },
  postComment({ dispatch, commit }, { id, comment }) {
    Ideas.post(`/${id}/comment`, comment)
      .then(() => dispatch(types.action.FETCH_IDEA_BY_ID, id))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to post comment.'));
  },
  voteIdeaById({ dispatch, commit }, id) {
    Ideas.post(`/${id}/vote`)
      .then(() => dispatch(types.action.FETCH_IDEA_BY_ID, id))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to vote on idea.'));
  },
  deleteIdeaById({ dispatch, commit }, id) {
    Ideas.delete(`/${id}`)
      .then(() => dispatch(types.action.FETCH_IDEAS))
      .catch(() => commit(types.mutation.SET_ERROR, 'Could not delete idea.'));
  },
  editIdeaById({ dispatch, commit }, { id, idea }) {
    Ideas.patch(`/${id}`, idea)
      .then(() => dispatch(types.action.FETCH_IDEA_BY_ID, id))
      .catch(() => commit(types.mutation.SET_ERROR, 'Could not edit idea.'));
  },
};

export default actions;
