const createService = require('feathers-mailgun');
const { disallow } = require('feathers-hooks-common');

module.exports = (app) => {
  const options = app.get('mailgun');

  // Initialize our service with any options it requires
  app.use('/mailer', createService(options));

  app.service('mailer').hooks({ before: { all: disallow('external') } });
};
