import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from '@/containers/Home';
import Terms from '@/containers/Terms';
import PageNotFound from '@/containers/PageNotFound';
import Privacy from '@/containers/Privacy';
import SignIn from '@/containers/SignIn';
import Magic from '@/containers/Magic';
import Ideas from '@/containers/Ideas';
import New from '@/containers/New';
import About from '@/containers/About';

Vue.use(Router);

const requireSignedIn = () => (to, from, next) => {
  if (store.state.auth.accessToken) {
    next();
  } else {
    next('/signin');
  }
};

const requireSignedOut = () => (to, from, next) => {
  if (!store.state.auth.accessToken) {
    next();
  } else {
    next('/');
  }
};

const router = new Router({
  mode: 'history', // enable HTML5 history mode
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/ideas', name: 'Ideas', component: Ideas },
    { path: '/new', name: 'New', component: New, beforeEnter: requireSignedIn() },
    { path: '/terms', name: 'Terms', component: Terms },
    { path: '/privacy', name: 'PrivacyPolicy', component: Privacy },
    { path: '/signin', name: 'SignIn', component: SignIn, beforeEnter: requireSignedOut() },
    { path: '/magic', name: 'Magic', component: Magic },
    { path: '/about', name: 'About', component: About },
    { path: '*', name: 'PageNotFound', component: PageNotFound },
  ],
});

export default router;
