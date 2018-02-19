<template lang="pug">
#app
  site-header
  router-view.content
  site-footer
</template>

<script>
import { mapActions } from 'vuex';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export default {
  name: 'App',
  components: {
    SiteFooter,
    SiteHeader,
  },
  methods: {
    ...mapActions('auth', ['retrieveSession']),
  },
  mounted() {
    this.retrieveSession();
  },
};
</script>

<style lang="scss">
@import 'assets/openideas.scss';
#app:first-child {
  padding-top: 0.85rem;
}
.content {
  flex: 1;
}
#app {
  border-top-style: solid;
  border-top-width: 0.3rem;
  border-top-color: $primary-color;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
