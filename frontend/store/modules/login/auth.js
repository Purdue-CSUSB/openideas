import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { VueAuthenticate } from 'vue-authenticate';

Vue.use(VueAxios, axios);

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: 'http://localhost:8081',
  storageType: 'cookieStorage',
  providers: {
    facebook: {
      clientId: '209770776265385',
      redirectUri: 'http://localhost:8080/login',
    },
  },
});

export default vueAuth;
