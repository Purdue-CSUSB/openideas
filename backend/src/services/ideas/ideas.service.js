import createService from 'feathers-mongoose';
import createModel from '../../models/ideas.model';
import hooks from './ideas.hooks';

export default (app) => {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'ideas',
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/ideas', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('ideas');

  service.hooks(hooks);
};
