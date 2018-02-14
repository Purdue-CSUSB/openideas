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
import IdeasFeed from '@/components/IdeasFeed';

Vue.use(Router);

const requireUser = () => (to, from, next) => {
  if (store.auth.state.user && store.auth.state.accessToken) {
    next();
  }
  next('/signin');
};

const router = new Router({
  mode: 'history', // enable HTML5 history mode
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/ideas', name: 'Ideas', component: Ideas },
    { path: '/ideasFeed', name: 'Ideas', component: IdeasFeed },
    { path: '/new', name: 'New', component: New, beforeEnter: requireUser() },
    { path: '/terms', name: 'Terms', component: Terms },
    { path: '/privacy', name: 'PrivacyPolicy', component: Privacy },
    { path: '/signin', name: 'SignIn', component: SignIn },
    { path: '/magic', name: 'Magic', component: Magic },
    { path: '*', name: 'PageNotFound', component: PageNotFound },
  ],
});

export default router;
