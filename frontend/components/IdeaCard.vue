<template lang="pug">
.idea-card
  .columns
    .column.col-2.col-sm-3.text-center.votes-container
      h2 {{ idea.votes }}
      p.subtitle votes
      button.btn.btn-sm.btn-primary.btn-block Upvote

    .column
      .card-header
        router-link(:to='idea._id.toString()') #[h4.card-title {{ idea.title }}]
      .card-body
        p {{ idea.description }}
      .card-actions
        ul
          li
            router-link(to='comment') Comments (32)
          li
            router-link(to='edit') Edit
          li
            router-link(to='delete') Delete
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
.card-body {
  p {
    font-size: 0.7rem;
  }

}

ul {
  margin: 0;
}

.card-actions {
  font-size: 0.6rem;
  ul {
    color: red;
    padding: 0;
    li {
      display: inline-block;
      &:not(:last-child) {
      padding-right: 1.3rem;
      }
    }
  }

  a {
    color: blue;
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
