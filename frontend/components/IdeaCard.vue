<template lang="pug">
#idea-card
  .card.bg-secondary
    .columns
      .col-mr-auto.text-center#votes
        button.btn.btn-sm.btn-primary
          i.icon.icon-arrow-up
        h3.card-title {{ idea.votes }}
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

<style lang="sass" scoped>
.card
  margin: 15px
#votes
  margin: 30px
</style>
