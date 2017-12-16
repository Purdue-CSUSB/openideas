import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import New from '@/containers/New';
import Idea from '@/containers/Idea';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/new',
      name: 'New',
      component: New,
    },
    {
      path: '/:id',
      name: 'Idea',
      component: Idea,
    },
  ],
  mode: 'history',
});
