// Initializes the `emailLookup` service on path `/email-lookup`
const createService = require('./email-lookup.class.js');
const hooks = require('./email-lookup.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'email-lookup',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/email-lookup', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('email-lookup');

  service.hooks(hooks);
};
