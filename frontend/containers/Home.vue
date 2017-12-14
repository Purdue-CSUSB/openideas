<template lang="pug">
#home
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      ideas: [
        { title: 'Make CS better', description: 'Fix stuff', author: 'mess@purdue.edu', votes: 1 },
        { title: 'Make CS worse', description: 'Break stuff', author: 'jh@purdue.edu', votes: 0 },
      ],
    };
  },
};
</script>
