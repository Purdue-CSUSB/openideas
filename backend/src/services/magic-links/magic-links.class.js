const crypto = require('crypto');
const base64url = require('base64url');

const randomString = length => base64url(crypto.randomBytes(length));

const Email = require('email-templates');
const path = require('path');

class Service {
  setup(app) {
    this.mailer = app.service('mailer');
    this.users = app.service('users');
    this.auth = app.service('authentication');
    this.authConfig = app.get('authentication');
    this.createJWT = app.passport.createJWT;
  }

  create(data) {
    const payload = randomString(20);
    return this.createJWT({ tok: payload }, {
      secret: this.authConfig.secret,
      jwt: this.authConfig.magicLink,
    }).then((token) => {
      // const link = `http://localhost:8080/magic?token=${token}`;
      let link;
      if (process.env.NODE_ENV === 'production') {
        link = `https://ideas.purdueusb.com/magic?token=${token}`;
      } else {
        link = `http://localhost:8080/magic?token=${token}`;
      }
      const email = new Email({
        views: {
          root: 'src/mail-templates',
        },
        transport: {
          jsonTransport: true,
        },
        juice: true,
        juiceResources: {
          preserveImportant: true,
          webResources: {
            //
            // this is the relative directory to your CSS/image assets
            // and its default path is `build/`:
            //
            // e.g. if you have the following in the `<head`> of your template:
            // `<link rel="stylesheet" href="style.css" data-inline="data-inline">`
            // then this assumes that the file `build/style.css` exists
            //
            relativeTo: path.resolve('src/mail-templates'),
            //
            // but you might want to change it to something like:
            // relativeTo: path.join(__dirname, '..', 'assets')
            // (so that you can re-use CSS/images that are used in your web-app)
            //
          },
        },
      });

      const to = data.email;
      const from = 'ideas@purdueusb.com';
      const subject = 'Your OpenIdeas Magic Link';
      return email
        .render('magic/html', {
          link,
          name: data.name,
        })
        .then((html) => {
          const message = {
            to, from, subject, html,
          };
          return message;
        })
        .then(message => this.mailer.create(message))
        .then(() => {
          Promise.resolve(this.users.patch(
            null,
            { token: payload },
            { query: { email: data.email } },
          ));
        })
        .catch(console.error);
    });
  }

  remove(id) {
    return this.verifyJWT(id)
      .then((payload) => {
        Promise.resolve(this.users.patch(null, { token: null }, { query: { token: payload.tok } }));
      }).catch(err => Promise.reject(err));
  }
}

module.exports = options => (new Service(options));

module.exports.Service = Service;
