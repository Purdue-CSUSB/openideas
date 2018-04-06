const MissingQueryParameter = param => new Error(`Missing required query parameter ${param}`);

class Service {
  setup(app) {
    this.ideas = app.service('ideas');
  }

  create(data, params) {
    if (params.query.ideaId === undefined) return Promise.reject(MissingQueryParameter('ideaId'));
    const comment = { author: params.query.userId, body: data };
    return this.ideas.patch(params.query.ideaId, { $push: { comments: comment } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.reject(err));
  }

  patch(id, data, params) {
    return this.remove(id, params)
      .then(idea => this.create(Object.assign(idea, data), params))
      .catch(err => Promise.reject(err));
  }

  remove(id, params) {
    if (params.query.ideaId === undefined) return Promise.reject(MissingQueryParameter('ideaId'));
    return this.ideas.patch(params.query.ideaId, { $pull: { comments: { _id: id } } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.reject(err));
  }
}

module.exports = options => new Service(options);

module.exports.Service = Service;
