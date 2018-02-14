const sendMagicLink = () => (context) => {
  const mailer = context.app.service('mailer');
  const from = 'ideas@purdueusb.com';
  const to = context.id;
  const email = {
    from,
    to,
    subject: 'OpenIdeas Login',
    html: 'testing',
  };
  return mailer.create(email)
    .then(() => Promise.resolve(context))
    .catch(err => Promise.reject(err));
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [sendMagicLink()],
    create: [],
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
