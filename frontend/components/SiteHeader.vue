<template lang="pug">
#site-header.container.grid-xl
  header.navbar
    section.navbar-section
      navbarSiteName 💡 OpenIdeas
      navbarLink(to='/') Home
      navbarLink(to='ideas') All Ideas
      navbarLink(to='about') About
    section.navbar-section
      navbarLink(to='signin') Sign In / Sign Up
</template>

<script>
import NavbarLink from '@/components/NavbarLink';
import NavbarSiteName from '@/components/NavbarSiteName';

export default {
  name: 'SiteHeader',
  components: {
    NavbarLink,
    NavbarSiteName,
  },
};
</script>

<style lang="scss">
#site-header {
  margin-bottom: 2.0rem;
}
</style>
