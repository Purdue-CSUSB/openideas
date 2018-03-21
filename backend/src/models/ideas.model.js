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
      author: { type: ObjectId, required: true, ref: 'Users' },
      _id: { type: ObjectId, default: () => new ObjectId() },
    }],
    voted: [{ type: ObjectId, ref: 'Users' }],
  }, {
    timestamps: true,
  });

  return mongooseClient.model('ideas', ideas);
};
