import Vue from 'vue';
import { VueAuthenticate } from 'vue-authenticate';
import VueAxios from 'vue-axios';
import axios from 'axios';
import types from './types';

Vue.use(VueAxios, axios);

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: 'http://localhost:8081',
  providers: {
    facebook: {
      clientId: '209770776265385',
      redirectUri: 'http://localhost:8080/login',
    },
  },
});

const actions = {
  logIn({ commit }) {
    vueAuth.authenticate('facebook')
      .then((res) => {
        // eslint-disable-next-line
        console.log(res);
        commit(types.mutation.SET_USER, {});
        commit(types.mutation.SET_LOGGED_IN);
      });
  },
};

export default actions;
