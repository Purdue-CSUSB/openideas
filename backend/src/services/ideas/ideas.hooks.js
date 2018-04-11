const { authenticate } = require('@feathersjs/authentication').hooks;
const { populate } = require('feathers-hooks-common');

/* eslint-disable no-param-reassign, no-underscore-dangle */

const cleanComments = () => context => context.app.service('comments')
  .remove(null, { query: { idea: context.id } })
  .then(() => Promise.resolve(context))
  .catch(err => Promise.reject(err));

const authorSchema = {
  include: {
    service: 'users',
    nameAs: 'author',
    parentField: 'authorId',
    childField: '_id',
    provider: undefined,
  },
};

const ideaCommentsSchema = {
  include: {
    service: 'comments',
    nameAs: 'comments',
    parentField: '_id',
    childField: 'idea',
    asArray: true,
    provider: undefined,
    ...authorSchema,
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
    all: [populate({ schema: authorSchema })],
    find: [],
    get: [populate({ schema: ideaCommentsSchema })],
    create: [],
    update: [],
    patch: [],
    remove: [cleanComments()],
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
