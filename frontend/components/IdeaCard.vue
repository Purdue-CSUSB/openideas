<template lang="pug">
.idea-card
  .columns
    .column.col-2.col-md-2.col-sm-3.text-center.votes-container
      h2 {{ idea.votes }}
      p.subtitle votes
      button.btn.btn-sm.btn-primary.btn-block Upvote

    .column.col-9
      .card-header
        h4.card-title #[router-link(:to='`/ideas/${idea._id}`' append) {{ idea.title }}]
      .card-body
        p(v-if='isFullCard') {{ idea.description }}
        p(v-else) {{ idea.description | truncate(450)}}
      .card-actions
        ul
          //- li
          //-   router-link(to='comment') Comments (32)
          //- li
          //-   router-link(to='edit') Edit
          //- li
          //-   router-link(to='delete') Delete
      .comments(v-if='isFullCard').column.col-8.col-sm-12
        comment(:user='user')

</template>

<script>
import Vue from 'vue';
import Comment from '@/components/CommentAvatar';
import Simpsonify from '@/../node_modules/simpsonify';
import VueTruncate from '@/../node_modules/vue-truncate-filter';

Vue.use(VueTruncate);

export default {
  name: 'IdeaCard',
  components: { Comment },
  computed: {
    isFullCard() {
      return this.$route.params.id;
    },
  },
  props: {
    idea: {
      type: Object,
      required: true,
    },
    isFullCard: Boolean,
  },
  data() {
    return {
      user: Simpsonify.getUsers(1)[0],
    };
  },
};
</script>

<style lang="scss" scoped>
.votes-container {
  p {
    font-size: x-small;
  }
}
.card-body {
  white-space: pre-line;

  p {
    font-size: 0.75rem;
    line-height: 1.1rem;
    margin-bottom: 0;
  }
}

ul {
  margin: 0;
}

.card-actions {
  font-size: 0.6rem;
  margin-top: 0.35rem;
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
    color: rgb(0, 140, 221);
  }
}
h2 {
  color: $primary-color;
  margin-bottom: 0;
}
h4 > a {
  color: $dark-color;
}
button.btn-sm {
  font-size: 0.6rem;
  padding: 0.15rem 0.3rem;
  max-width: 3rem;
  margin-left: auto;
  margin-right: auto;
}
.card-header a {
  text-decoration: none;
}
.card-title {
  color: $dark-color;
}
.idea-card {
  margin-bottom: 1.8rem;
}
</style>
