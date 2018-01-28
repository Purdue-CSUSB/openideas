<template lang="pug">
#home.container.grid-lg
  siteHeader
  hero
</template>

<script>

import hero from '@/components/hero';
import siteHeader from '@/components/siteHeader';

export default {
  name: 'Home',
  components: {
    siteHeader,
    hero,
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
