module.exports = (app) => {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const { ObjectId } = Schema;
  const ideas = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    comments: [{
      body: { type: String, required: true },
      author: { type: String, required: true },
    }],
    voted: [ObjectId],
  }, {
    timestamps: true,
  });

  return mongooseClient.model('ideas', ideas);
};
