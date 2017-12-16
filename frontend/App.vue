<template lang="pug">
#app
  navbar
  .container.grid-lg
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

<style lang="sass">
@import "../node_modules/spectre.css/src/spectre"
@import "../node_modules/spectre.css/src/icons"
</style>
