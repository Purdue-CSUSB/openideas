export default (app) => {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const ideas = new Schema({
    text: { type: String, required: true },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('ideas', ideas);
};
