<template lang="pug">
#hero.columns
  .column.col-10.col-mx-auto
    h1 Your Voice Matters
    h4
      small.subtitle  We're sure that Purdue CS students have many great ideas for their community. OpenIdeas is the best place to share and discuss those ideas. Let's get the conversations started!
    button.btn.btn-lg.btn-primary Get Started
</template>

<script>
export default {
  name: 'hero',
};
</script>


<style lang="scss" scoped>
#hero {
  padding: 2rem 0;
  background: url('/static/img/hero.jpg');
  background-size: 60rem;
  background-position-y: 50%;
  color: white;
}

h1 {
  font-size: 2.3rem;
}

p {
  font-size: 1rem;
}

button {
  $new-primary-color: darken( $primary-color, 10% );
  $new-border-color: darken( $primary-color, 15% );
  background-color: $new-primary-color !important;
  border-color: $new-border-color !important;
  margin-top: 1rem;
}
</style>
