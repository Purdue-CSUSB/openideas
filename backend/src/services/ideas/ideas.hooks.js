const { authenticate } = require('@feathersjs/authentication').hooks;

/* eslint-disable no-param-reassign */

const assembleComments = () => context => context.app.service('comments').find({ query: { idea: context.id } })
  .then((comments) => {
    context.result.comments = comments;
    return Promise.resolve(context);
  }).catch(err => Promise.reject(err));

const assembleAuthor = () => context => context.app.service('users').get(context.result.author)
  .then((user) => {
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
    get: [assembleComments(), assembleAuthor()],
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
