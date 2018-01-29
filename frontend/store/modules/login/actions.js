import axios from 'axios';
import types from './types';
import vueAuth from './auth';

const actions = {
  logIn({ commit }) {
    vueAuth.authenticate('facebook')
      .then(() => {
        axios.get('https://graph.facebook.com/v2.11/me', {
          params: { access_token: vueAuth.getToken() },
        }).then((res) => {
          commit(types.mutation.SET_USER, { name: res.data.name });
          commit(types.mutation.SET_LOGGED_IN);
        }).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          commit(types.mutation.SET_LOGGED_OUT);
        });
      });
  },
  logOut({ commit }) {
    axios.delete('http://localhost:8081/auth')
    // eslint-disable-next-line
      .catch(err => console.log(err));
    commit(types.mutation.SET_LOGGED_OUT);
  },
};

export default actions;
