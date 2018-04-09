const { authenticate } = require('@feathersjs/authentication').hooks;

const assembleAuthor = () => context => context.app.service('users').get(context.data.author)
  .then((user) => {
    // eslint-disable-next-line
    context.result.author = user;
    return Promise.resolve(context);
  }).catch(err => Promise.reject(err));

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [],
    find: [],
    get: [assembleAuthor()],
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
