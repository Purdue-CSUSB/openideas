const users = require('./users/users.service');
const ideas = require('./ideas/ideas.service');
const votes = require('./votes/votes.service');
const emailLookup = require('./email-lookup/email-lookup.service');
const mailer = require('./mailer.service');

module.exports = (app) => {
  app.configure(users)
    .configure(ideas)
    .configure(votes)
    .configure(emailLookup)
    .configure(mailer);
};
