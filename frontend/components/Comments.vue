<template lang="pug">
.comments
  .tile(v-if='author')
    .tile-icon
      .example-tile-icon
        user-icon(:user='author')
    .tile-content
      p.tile-title.mt-1 #[span.name {{ author.name }}]
      p.comment.text-gray shared this idea.
  .tile(v-for='comment in idea.comments')
    .tile-icon
      .example-tile-icon
        user-icon(:user='comment.author')
    .tile-content
      p.tile-title.mt-1 #[span.name {{ comment.author.name }}]
      p.comment {{ comment.body }}
  .tile(v-if='user')
    .tile-icon
      .example-tile-icon
        user-icon(:user='user')
    .tile-content
      .input-group
        textarea.mt-1.form-input(v-model='comment.body', placeholder="Your comment here", v-autoresize="true", @focus="showButton")
      .input-group.mt-2
        button.btn.btn-sm.btn-primary(v-show="isCommenting", @click='create({ ...comment, authorId: user._id })') Submit
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { autoresize } from '@/mixins';
import UserIcon from '@/components/UserIcon';

export default {
  mixins: [autoresize],
  components: { UserIcon },
  props: {
    author: Object,
    ideaId: String,
  },
  data() {
    return {
      comment: {
        body: '',
        idea: this.ideaId,
      },
      isCommenting: false,
    };
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('ideas', { idea: 'current' }),
  },
  methods: {
    hideButton() {
      this.isCommenting = false;
    },
    showButton() {
      this.isCommenting = true;
    },
    create(comment) {
      // TODO: get comments.state.copy and write a custom mutation to push new comments
      this.createRemote(comment);
      this.comment.body = '';
      this.hideButton();
      // TODO: rather than this ugly cuss
      this.fetch(this.ideaId);
    },
    ...mapActions('comments', { createRemote: 'create' }),
    ...mapActions('ideas', { fetch: 'get' }),
  },
};
</script>

<style lang="sass" scoped>
.tile-content
  font-size: 0.65rem
  padding-bottom: 1.0rem
  border-left-style: solid
  border-left-width: 2px
  border-left-color: #eeeeee
  margin-left: 0rem
  padding-left: 2.8rem


.tile .tile-content:not(:first-child)
  padding-left: 1.3rem
  margin-left: -0.85rem

.tile:last-child .tile-content
  padding-bottom: 0rem;
  border-left-style: none;

p.comment
  margin-bottom: 0

p.tile-title
  margin-bottom: 0.1rem;
.name
  font-weight: 600;

.comments
  margin-top: 1.0rem
  margin-left: -2.6lrem

textarea
  font-size: 0.65rem
  resize: none
  border-style: none
  padding: 0
  margin-top: 0.3rem

  &:focus
    padding: 0.3rem

button.btn
  font-size: 0.65rem

</style>
