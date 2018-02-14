<template lang="pug">
#site-header.container.grid-xl
  header.navbar
    section.navbar-section
      navbarSiteName 💡 OpenIdeas
      navbarLink(to='/') Home
      navbarLink(to='ideas') All Ideas
      navbarLink(to='about') About
    section.navbar-section
      a.btn.btn-link(@click='logIn')
        span Login
</template>

<script>
import NavbarLink from '@/components/NavbarLink';
import NavbarSiteName from '@/components/NavbarSiteName';
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/login/types';

const { mapActions } = createNamespacedHelpers('login');

export default {
  name: 'SiteHeader',
  components: {
    NavbarLink,
    NavbarSiteName,
  },
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
