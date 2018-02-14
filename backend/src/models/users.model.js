const mongoose = require('mongoose');
require('mongoose-type-email');

module.exports = (app) => {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    email: { type: mongoose.SchemaTypes.Email, required: true },
    name: { type: String, required: true },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('users', users);
};
