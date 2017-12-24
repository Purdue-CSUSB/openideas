<template lang="pug">
#home
  <p>{{ ideas[0].title }}</p>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'Hello Vue.js!',
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
