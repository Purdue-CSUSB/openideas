module.exports = (app) => {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const { ObjectId } = Schema;
  const ideas = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorId: { type: ObjectId, required: true },
    voted: [{ type: ObjectId, ref: 'Users' }],
  }, {
    timestamps: true,
  });

  return mongooseClient.model('ideas', ideas);
};
