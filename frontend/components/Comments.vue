<template lang="pug">
.comments
  .tile
    .tile-icon
      .example-tile-icon
        figure.avatar(:data-initial="user.name | initials")
          img(:src="user.avatarUrl")
    .tile-content
      p.tile-title.mt-1 #[span.name {{ user.name }}]
      p.comment shared this idea.

  .tile
    .tile-icon
      .example-tile-icon
        figure.avatar(:data-initial="user.name | initials")
          img(:src="user.avatarUrl")
    .tile-content
      .input-group
        textarea.mt-1.form-input(placeholder="Your comment here")

</template>

<script>
import { mapState } from 'vuex';
import { initials } from '@/mixins';

export default {
  mixins: [initials],
  props: {
    user: {
      type: Object,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapState('auth', ['user']),
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

</style>
