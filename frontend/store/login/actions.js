import feathers from '@/store/feathers';

const actions = {
  retrieveToken() {
    feathers.authenticate()
      /* eslint-disable */
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
  logIn({ commit }, { email, password }) {
    feathers.authenticate({ strategy: 'local', email, password })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
};

export default actions;
