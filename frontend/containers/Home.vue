<template lang="pug">
#home.container.grid-lg
  hero(title="Your Voice Matters", subtitle="We know that Purdue CS students have many great ideas for their community! That's why we created OpenIdeas, the best place to share and discuss those ideas. Let's get the conversations started!")
    button-link(to='/signin' type='primary') Get Started
</template>

<script>
import Hero from '@/components/Hero';
import ButtonLink from '@/components/ButtonLink';

export default {
  name: 'Home',
  components: {
    Hero,
    ButtonLink,
  },
};
</script>

<style lang="scss" scoped>
a.btn {
  $new-primary-color: darken($primary-color, 10%);
  $new-border-color: darken($primary-color, 15%);
  background-color: $new-primary-color !important;
  border-color: $new-border-color !important;
  margin-top: 1rem;
}
</style>
