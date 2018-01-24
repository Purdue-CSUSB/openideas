import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';

Vue.use(Router);

export default new Router({
  mode: 'history', // enable HTML5 history mode
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
