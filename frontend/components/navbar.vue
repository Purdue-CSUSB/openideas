<template lang="pug">
#navbar
  header.navbar.bg-secondary
    section.navbar-section
      router-link.navbar-brand.mr-2(to='/') OpenIssues
      router-link.btn.btn-link(to='/new') New Issue
    section.navbar-section
      a.btn.btn-link(href='https://github.com/purdue-csusb/openissues') Github
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="sass" scoped>
.navbar
  padding: 15px
  margin-bottom: 45px
</style>
