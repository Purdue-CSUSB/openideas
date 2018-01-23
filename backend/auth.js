const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token').Strategy;
const User = require('./models/user');

// https://www.npmjs.com/package/passport-facebook-token
const strategy = new FacebookTokenStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
},
(accessToken, refreshToken, profile, done) => {
  User.findOne({ facebookId: profile.id }).exec()
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      const newUser = new User({
        display_name: profile.displayName,
        email: profile.emails[0].value,
        facebookId: profile.id,
      });
      return newUser.save()
        .then(() => done(null, newUser))
        .catch(err => done(err));
    })
    .catch(err => done(err));
});
passport.serializeUser((user, done) => {
  // eslint-disable-next-line
  done(null, user._id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).exec()
    .then(user => done(null, user))
    .catch(err => done(err));
});
passport.use(strategy);

module.exports = passport;
