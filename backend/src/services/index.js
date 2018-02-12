import users from './users/users.service';
import ideas from './ideas/ideas.service';

// eslint-disable-next-line no-unused-vars
module.exports = (app) => {
  app.configure(users)
    .configure(ideas);
};
