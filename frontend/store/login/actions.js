import feathers from '@/store/feathers';

const actions = {
  retrieveToken() {
    feathers.authenticate()
      .then(res => console.log(res))
      .catch();
  },
  logIn() {},
};

export default actions;
