<template lang="pug">
div.column.col-8.col-md-12
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
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
          author: 'mess@purdue.edu',
          votes: 42,
          _id: 0,
        },
        {
          title: 'Make CS worse',
          description: 'Okay, the more I think about it, the more I think that CS fuckin sucks. Upvote if you think we deserve to have a different major which can make my asshole bleed a little less.',
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
