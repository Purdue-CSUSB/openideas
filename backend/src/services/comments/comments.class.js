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
    return this.ideas.patch(params.query.postId, { $pull: { comments: { _id: id } } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.reject(err));
  }
}

module.exports = options => new Service(options);

module.exports.Service = Service;
