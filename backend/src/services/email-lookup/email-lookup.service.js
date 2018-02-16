const createService = require('./email-lookup.class.js');

module.exports = (app) => {
  const paginate = app.get('paginate');

  const options = {
    name: 'email-lookup',
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/email-lookup', createService(options));
};
