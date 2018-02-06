<template lang="pug">
#site-header.container.grid-xl
  header.navbar
    section.navbar-section
      navbarSiteName 💡 OpenIdeas
      navbarLink(to='/') Home
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
import NavbarLink from '@/components/NavbarLink';
import NavbarSiteName from '@/components/NavbarSiteName';
import { mapActions } from 'vuex';
import types from '../store/modules/login/types';

export default {
  name: 'SiteHeader',
  components: {
    NavbarLink,
    NavbarSiteName,
  },
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
