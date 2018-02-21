<template lang="pug">
#site-header.container.grid-xl
  header.navbar
    section.navbar-section
      navbarSiteName 💡 OpenIdeas
      navbarLink(to='/') Home
      navbarLink(to='/ideas') All Ideas
      navbarLink(to='/new' v-if='user && accessToken') New Idea
      navbarLink(to='/about') About
    section.navbar-section
      navbarItem(v-if='user && accessToken' @click.native='signOut') {{ user.name }}
      navbarLink(v-else to='signin') Sign In / Sign Up
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavbarLink from '@/components/NavbarLink';
import NavbarSiteName from '@/components/NavbarSiteName';
import NavbarItem from '@/components/NavbarItem';

export default {
  name: 'SiteHeader',
  components: {
    NavbarLink,
    NavbarSiteName,
    NavbarItem,
  },
  computed: {
    ...mapState('auth', ['accessToken', 'user']),
  },
  methods: {
    ...mapActions('auth', ['signOut']),
  },
};
</script>

<style lang="scss">
#site-header {
  margin-bottom: 2.0rem;
}
</style>
