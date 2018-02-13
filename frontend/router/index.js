import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import Terms from '@/containers/Terms';
import PageNotFound from '@/containers/PageNotFound';
import Privacy from '@/containers/Privacy';
import SignIn from '@/containers/SignIn';

Vue.use(Router);

const router = new Router({
  mode: 'history', // enable HTML5 history mode
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
    },
    {
      path: '/privacy',
      name: 'PrivacyPolicy',
      component: Privacy,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
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
