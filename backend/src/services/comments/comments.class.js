class Service {
  setup(app) {
    this.ideas = app.service('ideas');
  }

  create(data, params) {
    return this.ideas.patch(params.query.postId, { $push: { comments: data } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.reject(err));
  }

  remove(id, params) {
    return this.ideas.patch(id, { $pull: { comments: { ...params.query } } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.reject(err));
  }

  // alternatively, generate comment ids +
  // remove(id, params) {
  //  return this.ideas.patch(params.query.postId, { $pull: { comments: { _id: id } } })
  //    ...
  // }
}

module.exports = options => new Service(options);

module.exports.Service = Service;
