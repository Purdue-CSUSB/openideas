import Feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';

const feathers = Feathers();
const backend =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8081';
feathers
  .configure(rest(backend).fetch(window.fetch))
  .configure(auth({ storage: window.localStorage }));

export default feathers;
