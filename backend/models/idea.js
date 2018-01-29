const mongoose = require('mongoose');

const { Schema } = mongoose;

const IdeaSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  votes: { type: Number, default: 0 },
  comments: [{
    body: { type: String, required: true },
    author: { type: String, required: true },
  }],
  voted: [String],
});

module.exports = mongoose.model('Idea', IdeaSchema);
