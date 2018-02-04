<template lang="pug">
#app
  siteHeader
  router-view.content
  siteFooter
</template>

<script>
import navbar from '@/components/Navbar';
import siteFooter from '@/components/SiteFooter';
import siteHeader from '@/components/SiteHeader';

export default {
  name: 'App',
  components: {
    navbar,
    siteFooter,
    siteHeader,
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
