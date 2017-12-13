const mongoose = require('mongoose');

const { Schema } = mongoose;

const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  description: String,
});

module.exports = mongoose.model('Idea', IdeaSchema);
