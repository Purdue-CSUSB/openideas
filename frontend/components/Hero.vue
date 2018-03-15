<template lang="pug">
#hero.columns
  .column.col-10.col-mx-auto
    h1 {{ title }}
    h4
      small.subtitle  {{ subtitle }}
    slot
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    subtitle: String,
  },
};
</script>


<style lang="scss" scoped>
#hero {
  padding: 2rem 0;
  background: url('/static/img/hero.jpg');
  background-size: 60rem;
  background-position-y: 50%;
  color: white;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.3rem;
}

p {
  font-size: 1rem;
}
</style>
