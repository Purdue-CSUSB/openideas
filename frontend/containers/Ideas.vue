<template lang="pug">
#ideas.container.grid-lg
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
