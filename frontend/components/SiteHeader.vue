<template lang="pug">
#site-header
  header.navbar
    section.navbar-section
      navbarSiteName 💡 OpenIdeas
      navbarLink.active(to='/') Home
      navbarLink(to='ideas') All Ideas
      navbarLink(to='about') About
    section.navbar-section
      a.btn.btn-link(@click='logIn' v-if='!isAuthenticated')
        span Login
      //- TODO: implement logOut action
      a.btn.btn-link(@click='logOut' v-if='isAuthenticated')
        span {{ user.name }}
</template>

<script>
import navbarLink from '@/components/NavbarLink';
import navbarSiteName from '@/components/NavbarSiteName';
import { mapActions } from 'vuex';
import types from '../store/modules/login/types';

export default {
  components: {
    navbarLink,
    navbarSiteName,
  },
  name: 'SiteHeader',
  computed: {
    user() {
      return this.$store.state.login.user;
    },
    isAuthenticated() {
      return this.$store.state.login.isAuthenticated;
    },
  },
  methods: {
    ...mapActions([types.action.LOG_IN, types.action.LOG_OUT]),
  },
};
</script>

<style lang="scss">
#site-header {
  margin-bottom: 2.0rem;
}
</style>
