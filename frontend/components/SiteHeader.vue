<template lang="pug">
#site-header.container.grid-xl
  header
    nav.columns.text-center
      section.col-5.col-mr-auto.col-sm-12.col-md-10.col-lg-7.col-xl-6
        navbarSiteName 💡 OpenIdeas
        navbarLink(to='/').hide-sm Home
        navbarLink(to='/ideas') All Ideas
        navbarLink(to='/new' v-if='user && accessToken') New Idea
        navbarLink(to='/about') About
      section.col-2.col-sm-12
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

<style lang="scss" scoped>
#site-header {
  margin-bottom: 2rem;
}
</style>
