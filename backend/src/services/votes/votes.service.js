// Initializes the `votes` service on path `/votes`
const createService = require('./votes.class.js');
const hooks = require('./votes.hooks');

module.exports = (app) => {
  const paginate = app.get('paginate');

  const options = {
    name: 'votes',
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/votes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('votes');

  service.hooks(hooks);
};
