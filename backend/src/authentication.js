const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');

const { Verifier } = jwt;

class MagicVerifier extends Verifier {
  verify(req, payload, done) {
    return this.app.service('users').find({ query: { token: payload.tok } })
      // eslint-disable-next-line
      .then(res => done(null, res.data[0], { ...payload, userId: res.data[0]._id }))
      .catch(err => done(err));
  }
}

module.exports = (app) => {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(jwt({ ...config.magicLink, Verifier: MagicVerifier, header: 'magic' }));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
      ],
      remove: [
        authentication.hooks.authenticate('jwt'),
      ],
    },
  });
};
