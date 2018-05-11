<template lang="pug">
button(:class='["btn", buttonClass]' @click='$emit("click")') #[slot]
</template>

<script>
export default {
  props: {
    type: String,
    loading: Boolean,
  },
  computed: {
    buttonClass() {
      if (this.loading) {
        return `btn-${this.type} loading`;
      }
      return `btn-${this.type}`;
    },
  },
};
</script>

<style>
.btn-primary {
  color: white;
}
</style>
