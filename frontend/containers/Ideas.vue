<template lang="pug">
#ideas
</template>

<script>
export default {
  name: 'Ideas',
  mounted() {
    this.$store.dispatch('fetchIdeas');
  },
};
</script>
