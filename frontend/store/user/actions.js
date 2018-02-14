import feathers from '@/store/feathers';

const actions = {
  retrieveToken() {
    feathers.authenticate()
      /* eslint-disable */
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
  checkEmail({ commit }, email) {
    return feathers.service('email-lookup').get(email)
      .then(res => Promise.resolve(res.data))
      .catch(err => Promise.reject(err));
  },
  createAccount({ commit }, credentials) {
    return feathers.service('users').create(credentials)
      .then(res => Promise.resolve(res.data))
      .catch(err => Promise.reject(err));
  },
};

export default actions;
