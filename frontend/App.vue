<template lang="pug">
#app
  router-view
</template>

<script>
import navbar from '@/components/navbar';

export default {
  name: 'app',
  components: {
    navbar,
  },
};
</script>

<style lang="scss">
@import 'assets/openissues.scss';
</style>
``
