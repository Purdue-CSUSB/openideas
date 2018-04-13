const { authenticate } = require('@feathersjs/authentication').hooks;
const { fastJoin } = require('feathers-hooks-common');
const BatchLoader = require('@feathers-plus/batch-loader');

const { getResultsByKey, getUniqueKeys } = BatchLoader;

/* eslint-disable no-param-reassign, no-underscore-dangle */

const commentsResolvers = {
  before: (context) => {
    context._loaders = { user: {} };
    context._loaders.user._id = new BatchLoader(async (keys, ctx) => {
      const results = await ctx.app.service('users').find({ query: { _id: { $in: getUniqueKeys(keys) } }, paginate: false });
      return getResultsByKey(keys, results, user => user._id, '!');
    }, { context });
  },
  joins: {
    author: () => async (comment, context) => {
      comment.author = await context._loaders.user._id.load(comment.authorId);
    },
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
    all: [fastJoin(commentsResolvers)],
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
