module.exports = (app) => {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    facebookId: { type: String },
    name: { type: String },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('users', users);
};
