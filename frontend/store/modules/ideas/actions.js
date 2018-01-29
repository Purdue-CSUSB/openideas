import makeApi from './Api';
import types from './types';

const Ideas = makeApi('/ideas');

const actions = {
  fetchIdeas({ commit }) {
    Ideas.get('/')
      .then(res => commit(types.mutation.SET_IDEAS, res.data))
      .catch(() => commit(types.mutation.SET_ERROR, 'Failed to fetch ideas.'));
  },
};

export default actions;
