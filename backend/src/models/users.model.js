export default (app) => {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    facebookId: { type: String },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('users', users);
};
