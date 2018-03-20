<template lang="pug">
.comments
  .tile.mb-2
    .tile-icon
      .example-tile-icon
        figure.avatar(:data-initial="user | initials")
          img(:src="user.avatarUrl")
    .tile-content
      p.tile-title.mt-1 #[span.name {{ user.firstName }} {{ user.lastName }}] shared this idea.
      p.comment It could easily have a comment alongside it
  .tile
    .tile-icon
      figure.avatar(:data-initial="user | initials")
        img(v-if="user.avatarUrl", :src="user.avatarUrl")
    .tile-content
      p.tile-title.mt-1 #[span.name {{ user.firstName }} {{ user.lastName }}]
      p.comment I don't know, it could actually be a dope idea. I can see lots of benefits in X, and also in Y. Z doesn't affect me as much, but I can imagine it would be nicer for students just coming in.

</template>

<script>
export default {
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
  filters: {
    initials(user) {
      return user.firstName[0] + user.lastName[0];
    },
  },
};
</script>

<style lang="sass" scoped>
.tile-content
  font-size: 0.65rem

p.tile-title
  margin-bottom: 0.1rem;
.name
  font-weight: 600;
</style>
