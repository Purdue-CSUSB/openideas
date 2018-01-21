const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./models/user');

const strategy = new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `${process.env.APP_DOMAIN}/auth/facebook/callback`,
},
(accessToken, refreshToken, profile, done) => {
  User.findOne({ facebookId: profile.id }).exec()
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      const newUser = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        facebookId: profile.id,
      });
      return newUser.save()
        .then(() => done(null, newUser))
        .catch(err => done(err));
    })
    .catch(err => done(err));
});
passport.use(strategy);

module.exports = passport;
