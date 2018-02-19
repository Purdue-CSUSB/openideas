<template lang="pug">
#ideas.container.grid-lg
</template>

<script>
import { mapActions } from 'vuex';
import IdeaCard from '@/components/IdeaCard';

export default {
  name: 'Ideas',
  components: { IdeaCard },
  methods: {
    ...mapActions('ideas', ['find']),
  },
  mounted() {
    this.find();
  },
};
</script>
