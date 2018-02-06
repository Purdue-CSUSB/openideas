const User = require('./models/user');
/* eslint-disable */
module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    User.findById(req.session.user._id).exec()
      .then((user) => {
        if (user) {
          req.user = user;
          req.session.user = user;
          res.locals.user = user;
        }
        next();
      })
      .catch(() => next());
  } else {
    next();
  }
};
