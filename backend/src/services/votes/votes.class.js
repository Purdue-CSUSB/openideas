const MissingQueryParameter = param => new Error(`Missing required query parameter ${param}`);

class Service {
  setup(app) {
    this.ideas = app.service('ideas');
  }

  create({ ideaId }, params) {
    if (ideaId === undefined) return Promise.reject(MissingQueryParameter('ideaId'));
    return this.ideas.patch(ideaId, { $push: { voted: params.query.userId } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.reject(err));
  }

  remove(id, params) {
    if (params.query.userId === undefined) return Promise.reject(MissingQueryParameter('userId'));
    return this.ideas.patch(id, { $pull: { voted: params.query.userId } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.reject(err));
  }
}

module.exports = options => (new Service(options));

module.exports.Service = Service;
