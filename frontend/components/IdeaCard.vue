<template lang="pug">
.idea-card
  .columns
    .column.col-2.col-sm-3.text-center.votes-container
      h2 {{ idea.voted.length }}
      p.subtitle votes
      button.btn.btn-sm.btn-primary.btn-block(@click='addVote({ id: idea._id })') Upvote

    .column.col-9
      .card-header
        h4.card-title #[router-link(:to='`/ideas/${idea._id}`' append) {{ idea.title }}]
      .card-body
        p(v-if='isFullCard') {{ idea.description }}
        p(v-else) {{ idea.description | truncate(450)}}
      .card-actions
        ul
          li
            router-link.btn.btn-link.btn-sm(to='comment') Comments ({{ idea.comments.length }})
          li
            button.btn.btn-link.btn-sm(disabled) Edit
          li
            button.btn.btn-link.btn-sm(@click='deleteIdea(idea._id)') Delete
      .comments(v-if='isFullCard').column.col-8.col-sm-12
        comment(:user='user')

</template>

<script>
import Vue from 'vue';
import { mapActions, mapMutations } from 'vuex';
import Comment from '@/components/Comments';
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
  },
  methods: {
    ...mapActions('ideas', { removeRemote: 'remove' }),
    ...mapActions('votes', { addVote: 'create' }),
    ...mapMutations('ideas', { removeLocal: 'removeItem' }),
    deleteIdea(_id) {
      this.removeLocal(_id);
      this.removeRemote(_id);
    },
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
      a:first-child {
        padding-left: 0;
        border-left-width: 0;
      }
    }
  }

  a,
  button.btn-sm {
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

a.btn-sm,
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
