const users = require('./users/users.service');
const ideas = require('./ideas/ideas.service');
// eslint-disable-next-line no-unused-vars
module.exports = (app) => {
  app.configure(users)
    .configure(ideas);
};
