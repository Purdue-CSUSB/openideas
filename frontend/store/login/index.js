import state from './state';
import mutations from './mutations';

const login = {
  namespaced: true,
  state,
  mutations,
};

export default login;
