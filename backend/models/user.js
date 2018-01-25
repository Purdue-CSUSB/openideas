const mongoose = require('mongoose');
const findOrCreate = require('findorcreate-promise');

const { Schema } = mongoose;

const UserSchema = new Schema({
  display_name: { type: String, required: true },
  email: { type: String, required: true },
  facebookId: { type: String, required: true },
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);
