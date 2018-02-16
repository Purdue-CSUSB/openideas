/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class Service {
  setup(app) {
    this.ideas = app.service('ideas');
  }

  create(data, params) {
    return this.ideas.patch(data.id, { $inc: { votes: 1 }, $push: { voted: params.query.userId } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.reject(err));
  }

  remove(id, params) {
    return this.ideas.patch(id, { $inc: { votes: -1 }, $pull: { voted: params.query.userId } })
      .then(idea => Promise.resolve(idea))
      .catch(err => Promise.resolve(err));
  }
}

module.exports = options => (new Service(options));

module.exports.Service = Service;
