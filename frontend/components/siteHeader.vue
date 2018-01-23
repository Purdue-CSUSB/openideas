<template lang="pug">
#site-header
  header.navbar
    section.navbar-section
      a.navbar-brand.mr-2(href='#')
        span OpenIdeas
      a.btn.btn-link.active(href='#')
        span Home
      a.btn.btn-link(href='#')
        span All Ideas
      a.btn.btn-link(href='#')
        span About
    section.navbar-section
      a(href='#') Login
</template>

<script>
export default {
  name: 'SiteHeader',
};
</script>
