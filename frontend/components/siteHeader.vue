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
      a.btn.btn-link(@click='logIn' v-if='!isAuthenticated')
        span Login
      //- TODO: implement logOut action
      a.btn.btn-link(@click='logOut' v-if='isAuthenticated')
        span {{ user.name }}
</template>

<script>
import { mapActions } from 'vuex';
import types from '../store/modules/login/types';

export default {
  name: 'SiteHeader',
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
