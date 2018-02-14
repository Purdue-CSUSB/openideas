const { authenticate } = require('@feathersjs/authentication').hooks;

const sendMagicLink = () => (context) => {
  const mailer = context.app.service('mailer');
  const from = 'ideas@purdueusb.com';
  const to = context.result.email;
  const email = {
    from,
    to,
    subject: 'OpenIdeas Login',
    html: 'You have successfully signed up for OpenIdeas!',
  };
  return mailer.create(email)
    .then(() => Promise.resolve(context))
    .catch(err => Promise.reject(err));
};

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [sendMagicLink()],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
