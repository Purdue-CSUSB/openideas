<template lang="pug">
#home.container.grid-lg
  hero
  ideas-feed
</template>

<script>
import Hero from '@/components/Hero';
import IdeasFeed from '@/components/IdeasFeed';

export default {
  name: 'Home',
  components: {
    Hero,
    IdeasFeed,
  },
  data() {
    return {
      ideas: [
        {
          title: 'Make CS better',
          description: 'Fix stuff',
          author: 'mess@purdue.edu',
          votes: 1,
        },
        {
          title: 'Make CS worse',
          description: 'Break stuff',
          author: 'jh@purdue.edu',
          votes: 0,
        },
      ],
    };
  },
};
</script>
