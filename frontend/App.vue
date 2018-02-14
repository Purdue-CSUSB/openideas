<template lang="pug">
#app
  site-header
  router-view.content
  site-footer
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/user/types';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

const { mapActions } = createNamespacedHelpers('user');

export default {
  name: 'App',
  components: {
    SiteFooter,
    SiteHeader,
  },
  methods: {
    ...mapActions([types.action.RETRIEVE_TOKEN]),
  },
  mounted() {
    this.retrieveToken();
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
