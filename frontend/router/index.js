import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import LoginCallbackHandler from '@/containers/LoginCallbackHandler';

Vue.use(Router);

const router = new Router({
  mode: 'history', // enable HTML5 history mode
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'LoginCallbackHandler',
      component: LoginCallbackHandler,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/_=_') {
    return next(false);
  }
  return next();
});

export default router;
