<template lang="pug">
#ideas.container.grid-lg
  h3 All Ideas
  .empty(v-if="!isFindPending && list.length == 0")
      p.empty-title.h5 No Ideas Found 😟
      p.empty-subtitle Be the first to create one!
      .empty-action
        router-link(to="/new").btn.btn-primary New Idea
  .columns
    .column.col-8.col-lg-12
      template(v-for='idea in list')
        IdeaCard(:idea='idea')
      .loading.loading-lg(v-if="isFindPending")
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import IdeaCard from '@/components/IdeaCard';

export default {
  name: 'Ideas',
  components: { IdeaCard },
  computed: {
    ...mapGetters('ideas', ['list']),
    ...mapState('ideas', ['isFindPending']),
  },
  methods: {
    ...mapActions('ideas', ['find']),
  },
  mounted() {
    this.find();
  },
};
</script>

<style lang="sass" scoped>
.empty
  background: none

[v-cloak]
  display: none;

</style>
