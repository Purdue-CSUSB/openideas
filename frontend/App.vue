<template lang="pug">
#app
  router-view
  siteFooter.section.section-footer
</template>

<script>
import navbar from '@/components/navbar';
import siteFooter from '@/components/siteFooter';

export default {
  name: 'app',
  components: {
    navbar,
    siteFooter,
  },
};
</script>

<style lang="scss">
@import 'assets/openideas.scss';
#app:first-child {
  padding-top: 0.85rem;
}
#app {
  border-top-style: solid;
  border-top-width: 0.3rem;
  border-top-color: $primary-color;
  flex: 1 0 auto; /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 1rem;
}
</style>
