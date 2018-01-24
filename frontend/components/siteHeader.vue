<template lang="pug">
#site-header
  header.navbar
    section.navbar-section
      navbarSiteName 💡 OpenIdeas
      navbarLink.active(to='/') Home
      navbarLink(to='ideas') All Ideas
      navbarLink(to='about') About
    section.navbar-section
      a(href='http://localhost:8081/auth/facebook') Sign In
</template>

<script>
import navbarLink from '@/components/navbarLink';
import navbarSiteName from '@/components/navbarSiteName';
import { mapActions } from 'vuex';
import types from '../store/modules/login/types';

export default {
  components: {
    navbarLink,
    navbarSiteName,
  },
  name: 'SiteHeader',
  methods: {
    ...mapActions([types.action.LOG_IN]),
  },
};
</script>

<style lang="scss">
#site-header {
  margin-bottom: 2.0rem;
}
</style>
