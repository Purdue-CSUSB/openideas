const authentication = require('@feathersjs/authentication');
const jwt, { Verifier } = require('@feathersjs/authentication-jwt');

class MagicVerifier extends Verifier {
  verify(req, payload, done) {
    console.log(req);
    done(null, {}, payload);
  }
};

module.exports = (app) => {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(jwt({ ...config.magicLink, Verifier: MagicVerifier}))

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
