import mongoose from 'mongoose';

export default (app) => {
  mongoose.connect(app.get('mongodb'), {});
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
