<template lang="pug">
#home
  h1 Issues
  idea-card(
    v-for='(idea, index) in ideas'
    :key='idea._id'
    :idea='idea'
    :index='index'
  )
</template>

<script>
import ideaCard from '@/components/ideaCard';

export default {
  name: 'Home',
  components: {
    ideaCard,
  },
  data() {
    return {
      ideas: [
        { _id: '123a', title: 'Make CS better', description: 'Fix stuff', author: 'mess@purdue.edu', votes: 100 },
        { _id: '456b', title: 'Make CS worse', description: 'Break stuff', author: 'jh@purdue.edu', votes: 0 },
      ],
    };
  },
};
</script>
