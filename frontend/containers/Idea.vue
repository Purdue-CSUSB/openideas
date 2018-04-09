<template lang="pug">
#ideas.container.grid-lg
  idea-card(:idea='current' v-if='current' :isFullCard='true')
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import IdeaCard from '@/components/IdeaCard';

export default {
  name: 'Idea',
  computed: {
    ...mapGetters('ideas', { current: 'current' }),
  },
  components: { IdeaCard },
  methods: {
    ...mapActions('ideas', { fetch: 'get' }),
    ...mapMutations('ideas', { setCurrent: 'setCurrent' }),
  },
  mounted() {
    this.fetch(this.$route.params.id);
    this.setCurrent(this.$route.params.id);
  },
};
</script>
