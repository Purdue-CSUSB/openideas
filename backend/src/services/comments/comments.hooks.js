const { authenticate } = require('@feathersjs/authentication').hooks;
const { populate } = require('feathers-hooks-common');

const commentAuthorSchema = {
  include: {
    service: 'users',
    nameAs: 'author',
    parentField: 'authorId',
    childField: '_id',
    provider: undefined,
  },
};

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
    all: [populate({ schema: commentAuthorSchema })],
    find: [],
    get: [],
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
