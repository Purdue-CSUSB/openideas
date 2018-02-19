import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex';
import feathers from './feathers';
import authSettings from './auth';

const { service, auth } = feathersVuex(feathers, { idField: '_id', enableEvents: false });

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    service('users'),
    service('email-lookup'),
    service('magic-links'),
    service('ideas'),
    service('votes'),
    auth(authSettings),
  ],
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
