<template lang="pug">
.idea-card
  .columns
    .column.col-2.text-center.votes-container
      h2 {{ idea.votes }}
      p.subtitle votes
      button.btn.btn-sm.btn-primary.btn-block
        i.fa.fa-chevron-up

    .column
      .card-header
        router-link.h5.card-title(:to='idea._id') {{ idea.title }}
      .card-body
        p {{ idea.description }}
</template>

<script>
export default {
  name: 'IdeaCard',
  props: {
    idea: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.votes-container{

  p {
    font-size: x-small;
  }
}
h2{
  color: $primary-color;
  margin-bottom: 0;
}

button {
  font-size: 0.5rem;
  height: 0.5rem;
  padding: 0.15rem 0.3rem;
}
</style>
