<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  name: 'app',
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
}
</style>
