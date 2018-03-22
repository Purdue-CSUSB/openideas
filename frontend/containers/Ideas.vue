<template lang="pug">
#ideas.container.grid-lg
  .columns
    .column.col-8.col-lg-12
      h3 All Ideas
      template(v-for='idea in list')
        IdeaCard(:idea='idea')
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import IdeaCard from '@/components/IdeaCard';

export default {
  name: 'Ideas',
  components: { IdeaCard },
  computed: {
    ...mapGetters('ideas', ['list']),
  },
  methods: {
    ...mapActions('ideas', ['find']),
  },
  mounted() {
    this.find();
  },
};
</script>
