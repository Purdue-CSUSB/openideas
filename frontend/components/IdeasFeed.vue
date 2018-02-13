<template lang="pug">
div.column.col-6
  div
    h2 Trending Ideas
    idea-card(:idea='ideas[0]')
    idea-card(:idea='ideas[1]')
</template>

<script>
import IdeaCard from '@/components/IdeaCard';

export default {
  name: 'Ideas',
  components: {
    IdeaCard,
  },
  data() {
    return {
      ideas: [
        {
          title: 'Make CS better',
          description: 'Fix stuff',
          author: 'mess@purdue.edu',
          votes: 42,
          _id: 0,
        },
        {
          title: 'Make CS worse',
          description: 'Break stuff',
          author: 'jh@purdue.edu',
          votes: 23,
          _id: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
