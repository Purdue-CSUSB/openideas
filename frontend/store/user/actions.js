import feathers from '@/store/feathers';

const actions = {
  retrieveToken() {
    feathers.authenticate()
      /* eslint-disable */
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
  checkEmail({}, email) {
    return feathers.service('email-lookup').get(email)
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err));
  },
  createAccount({}, credentials) {
    return feathers.service('users').create(credentials)
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err));
  },
  auth({}, accessToken) {
    return feathers.authenticate({
      strategy: 'magicLink',
      accessToken,
    }).then(res => console.log(res))
    .catch(err => console.log(err));
  },
  sendLink({}, email) {
    return feathers.service('magic-links').create({ email })
      .then(user => console.log('user', user))
      .catch(err => console.log('err', err));
  }
};

export default actions;
