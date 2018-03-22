<template lang="pug">
.comments
  .tile
    .tile-icon
      .example-tile-icon
        figure.avatar(:data-initial="user | initials")
          img(:src="user.avatarUrl")
    .tile-content
      p.tile-title.mt-1 #[span.name {{ user.firstName }} {{ user.lastName }}]
      p.comment shared this idea.
  .tile
    .tile-icon
      figure.avatar(:data-initial="user | initials")
        //- img(v-if="user.avatarUrl", :src="user.avatarUrl")
    .tile-content
      p.tile-title.mt-1 #[span.name {{ user.firstName }} {{ user.lastName }}]
      p.comment I don't know, it could actually be a dope idea. I can see lots of benefits in X, and also in Y. Z doesn't affect me as much, but I can imagine it would be nicer for students just coming in.
  .tile
    .tile-icon
      figure.avatar(:data-initial="user | initials")
        //- img(v-if="user.avatarUrl", :src="user.avatarUrl")
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

</style>
