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
      button(@click='logIn') Login
</template>

<script>
import { mapActions } from 'vuex';
import types from '../store/modules/login/types';

export default {
  name: 'SiteHeader',
  methods: {
    ...mapActions([types.action.LOG_IN]),
  },
};
</script>
