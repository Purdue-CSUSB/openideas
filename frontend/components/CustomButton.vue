<template lang="pug">
button(:class='["btn", buttonClass]') #[slot]
</template>

<script>
export default {
  props: {
    type: String,
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
