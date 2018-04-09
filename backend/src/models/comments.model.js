// comments-model.js - A mongoose model
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = (app) => {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const { ObjectId } = Schema;
  const comments = new Schema({
    body: { type: String, required: true },
    author: { type: ObjectId, required: true },
    idea: { type: ObjectId, required: true },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('comments', comments);
};
