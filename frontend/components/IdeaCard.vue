<template lang="pug">
.idea-card
  .columns
    .column.col-2.col-sm-3.text-center.votes-container
      transition(name="fade", mode="out-in")
        h2(v-if='idea.voted') {{ votes }}
      p(v-if="votes > 1").subtitle votes
      p(v-else).subtitle vote
      custom-button(type="primary" @click='addVoteLocal(idea._id)').btn-sm.btn-block Upvote

    .column.col-9
      .card-header
        h4(v-if='isFullCard').card-title #[router-link(:to='`/ideas/${idea._id}`') {{ idea.title }}]
        h4(v-else).card-title #[router-link(:to='`/ideas/${idea._id}`') {{ idea.title | truncate(130) }}]
      .card-body
        p(v-if='isFullCard') {{ idea.description }}
        p(v-else) {{ idea.description | truncate(450) }}
      .card-actions
        ul
          li
            router-link(:to='`/ideas/${idea._id}`', exact-active-class="notactive").btn.btn-link.btn-sm Comments ({{ idea.comments ? idea.comments.length : 0 }})
          //- li
          //-   button.btn.btn-link.btn-sm(disabled) Edit
          //- li
          //-   button.btn.btn-link.btn-sm(@click='deleteIdea(idea._id)') Delete
      .comments(v-if='isFullCard').column.col-8.col-sm-12
        Comments(:author='idea.author' :ideaId='idea._id')

</template>

<script>
import Vue from 'vue';
import { mapActions, mapMutations } from 'vuex';
import Comments from '@/components/Comments';
import CustomButton from '@/components/CustomButton';
import VueTruncate from 'vue-truncate-filter';

Vue.use(VueTruncate);

export default {
  name: 'IdeaCard',
  components: { Comments, CustomButton },
  computed: {
    votes() {
      return this.idea.voted.length + this.addedVotes;
    },
  },
  props: {
    idea: {
      type: Object,
      required: true,
    },
    isFullCard: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      addedVotes: 0,
    };
  },
  methods: {
    ...mapActions('ideas', { removeRemote: 'remove' }),
    ...mapActions('votes', { addVote: 'create' }),
    ...mapMutations('ideas', { removeLocal: 'removeItem' }),
    deleteIdea(_id) {
      this.removeLocal(_id);
      this.removeRemote(_id);
      if (this.isFullCard) {
        this.$router.push('/ideas');
      }
    },
    addVoteLocal(_id) {
      this.addedVotes = 1;
      this.addVote({ ideaId: _id });
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
