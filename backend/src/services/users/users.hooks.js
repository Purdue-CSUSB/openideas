const { authenticate } = require('@feathersjs/authentication').hooks;
const { BadRequest } = require('@feathersjs/errors');
const { validate: validateWith } = require('feathers-hooks-common');
const { validate } = require('email-validator');

const emailValidatorFn = ({ email }) => {
  if (!email || validate(email)) {
    return Promise.resolve(null);
  }
  return Promise.reject(new BadRequest('Invalid email', { errors: { email: 'invalid' } }));
};

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [validateWith(emailValidatorFn)],
    update: [authenticate('jwt'), validateWith(emailValidatorFn)],
    patch: [authenticate('jwt'), validateWith(emailValidatorFn)],
    remove: [authenticate('jwt')],
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
