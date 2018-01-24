<template lang="pug">
#site-header
  header.navbar
    section.navbar-section
      navbarSiteName 💡 OpenIdeas
      navbarLink.active(to='/') Home
      navbarLink(to='ideas') All Ideas
      navbarLink(to='about') About
    section.navbar-section
      navbarLink(to='signin') Sign In
</template>

<script>
import navbarLink from '@/components/navbarLink';
import navbarSiteName from '@/components/navbarSiteName';

export default {
  components: {
    navbarLink,
    navbarSiteName,
  },
  name: 'SiteHeader',
};
</script>

<style lang="scss">
#site-header {
  margin-bottom: 2.0rem;
}
</style>
