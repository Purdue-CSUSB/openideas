<template lang="pug">
.idea-card
  .columns
    .column.col-2.col-sm-3.text-center.votes-container
      h2 {{ idea.votes }}
      p.subtitle votes
      button.btn.btn-sm.btn-primary.btn-block Upvote

    .column
      .card-header
        router-link(:to='idea._id') #[h4.card-title {{ idea.title }}]
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

button.btn-sm {
  font-size: 0.6rem;
  padding: 0.15rem 0.3rem;
}
.card-header a {
  text-decoration: none;
}
.card-title{
  color: $dark-color;
}
.idea-card {
  margin-bottom: 1rem;
}
</style>
