// Initializes the `Comments` service on path `/comments`
const createService = require('./comments.class.js');
const hooks = require('./comments.hooks');

module.exports = (app) => {
  const paginate = app.get('paginate');

  const options = {
    name: 'comments',
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/comments', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('comments');

  service.hooks(hooks);
};
