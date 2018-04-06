<template lang="pug">
#ideas.container.grid-lg
  idea-card(:idea='idea' v-if='idea')
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
  // TODO: need to fix this by looking into returning a promise from the fetch/get action in ideas.
  mounted() {
    this.fetch(this.$route.params.id);
    this.idea = this.getLocal(this.$route.params.id);
  },
};
</script>
