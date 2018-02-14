/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class Service {
  setup(app) {
    this.app = app;
    this.ideas = app.service('ideas');
  }

  get(id, params) {
    const idea = this.ideas.get(id, params)
      .then(res => res.data.voted.includes(params.query.userId));
  }

  create(data, params) {

  }

  remove(id, params) {

  }
}

module.exports = options => (new Service(options));

module.exports.Service = Service;
