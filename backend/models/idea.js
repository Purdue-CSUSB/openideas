const mongoose = require('mongoose');

const { Schema } = mongoose;

const IdeaSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  votes: { type: Number, default: 0 },
  comments: [{
    body: String,
    author: String,
  }],
});

module.exports = mongoose.model('Idea', IdeaSchema);
