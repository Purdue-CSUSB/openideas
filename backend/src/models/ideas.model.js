module.exports = (app) => {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const ideas = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    votes: { type: Number, default: 0 },
    comments: [{
      body: { type: String, required: true },
      author: { type: String, required: true },
    }],
    voted: [String],
  }, {
    timestamps: true,
  });

  return mongooseClient.model('ideas', ideas);
};
