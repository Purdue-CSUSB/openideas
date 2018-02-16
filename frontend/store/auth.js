import feathers from './feathers';

const auth = {
  state: { user: null },
  mutations: {
    setUser(state, user) { state.user = user; },
    clearUser(state) { state.user = null; },
  },
  actions: {
    retrieveSession({ commit, dispatch }, options = {}) {
      return dispatch('authenticate', options)
        .then(res => feathers.passport.verifyJWT(res.accessToken))
        .then(payload => dispatch('users/get', payload.userId, { root: true }))
        .then((user) => {
          commit('setUser', user);
          return Promise.resolve(user);
        })
        .catch(err => Promise.reject(err));
    },
    signIn({ dispatch }, accessToken) {
      return dispatch('retrieveSession', { strategy: 'magicLink', accessToken });
    },
    signOut({ commit, dispatch }) {
      return dispatch('logout')
        .then(() => commit('clearUser'));
    },
  },
};

export default auth;
