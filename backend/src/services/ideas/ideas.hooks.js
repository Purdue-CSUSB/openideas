const { authenticate } = require('@feathersjs/authentication').hooks;
const { fastJoin } = require('feathers-hooks-common');
const BatchLoader = require('@feathers-plus/batch-loader');

const { getResultsByKey, getUniqueKeys } = BatchLoader;

/* eslint-disable no-param-reassign, no-underscore-dangle */

const cleanComments = () => context => context.app.service('comments')
  .remove(null, { query: { idea: context.id } })
  .then(() => Promise.resolve(context))
  .catch(err => Promise.reject(err));

const ideaResolvers = {
  before: (context) => {
    context._loaders = { user: {}, comments: {} };
    context._loaders.user._id = new BatchLoader(async (keys, ctx) => {
      const results = await ctx.app.service('users').find({ query: { _id: { $in: getUniqueKeys(keys) } }, paginate: false });
      return getResultsByKey(keys, results, user => user._id, '!');
    }, { context });
    context._loaders.comments._id = new BatchLoader(async (keys, ctx) => {
      const results = await ctx.app.service('comments').find({ query: { idea: { $in: getUniqueKeys(keys) } }, paginate: false });
      return getResultsByKey(keys, results, comment => comment.idea, '[]');
    }, { context });
  },
  joins: {
    author: () => async (idea, context) => {
      idea.author = await context._loaders.user._id.load(idea.authorId);
    },
    comments: () => async (idea, context) => {
      idea.comments = await context._loaders.comments._id.load(idea._id);
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
    all: [fastJoin(ideaResolvers)],
    find: [],
    get: [],
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
