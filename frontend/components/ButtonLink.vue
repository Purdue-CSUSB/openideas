<template lang="pug">
router-link(:class='["btn", "btn-lg", buttonClass]', :to='to') #[slot]
</template>

<script>
export default {
  props: {
    type: String,
    to: String,
  },
  computed: {
    buttonClass() { return `btn-${this.type}`; },
  },
};
</script>

<style>
.btn-primary {
  color: white;
}
</style>
