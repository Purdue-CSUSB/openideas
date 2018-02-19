// Initializes the `magicLinks` service on path `/magic-links`
const createService = require('./magic-links.class.js');
const hooks = require('./magic-links.hooks');

module.exports = (app) => {
  const paginate = app.get('paginate');

  const options = {
    name: 'magic-links',
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/magic-links', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('magic-links');

  service.hooks(hooks);
};
