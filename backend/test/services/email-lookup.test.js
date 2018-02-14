const assert = require('assert');
const app = require('../../src/app');

describe('\'emailLookup\' service', () => {
  it('registered the service', () => {
    const service = app.service('email-lookup');

    assert.ok(service, 'Registered the service');
  });
});
