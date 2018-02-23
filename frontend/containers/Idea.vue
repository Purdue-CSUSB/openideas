<template lang="pug">
#ideas.container.grid-lg
  idea-card(:idea='idea')
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import IdeaCard from '@/components/IdeaCard';

export default {
  name: 'Idea',
  computed: {
    ...mapGetters('ideas', { getLocal: 'get' }),
  },
  components: { IdeaCard },
  methods: {
    ...mapActions('ideas', { fetch: 'get' }),
  },
  data() {
    return {
      idea: null,
    };
  },
  mounted() {
    this.fetch(this.$route.params.id);
    this.idea = this.getLocal(this.$route.params.id);
  },
};
</script>
