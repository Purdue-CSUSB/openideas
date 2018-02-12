import users from './users/users.service';
import ideas from './ideas/ideas.service';

// eslint-disable-next-line no-unused-vars
export default (app) => {
  app.configure(users)
    .configure(ideas);
};
