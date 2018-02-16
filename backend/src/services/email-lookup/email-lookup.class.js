class Service {
  setup(app) {
    this.users = app.service('users');
  }

  get(email) {
    return this.users.find({ query: { email } })
      .then(res => Promise.resolve(res.data[0]))
      .catch(err => Promise.reject(err));
  }
}

module.exports = options => (new Service(options));

module.exports.Service = Service;
