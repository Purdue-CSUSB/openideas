const { authenticate } = require('@feathersjs/authentication').hooks;
const { queryWithCurrentUser } = require('feathers-authentication-hooks');

const onlyVoteOnce = () => context => context.app.service('ideas').get(context.data.id)
  .then((idea) => {
    if (idea.voted.includes(context.params.query.userId)) {
      Promise.reject(new Error('Can not vote more than once'));
    } else {
      Promise.resolve(context);
    }
  }).catch(err => Promise.reject(err));

module.exports = {
  before: {
    all: [authenticate('jwt'), queryWithCurrentUser()],
    find: [],
    get: [],
    create: [onlyVoteOnce()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
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
