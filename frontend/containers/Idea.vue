<template lang="pug">
#idea
</template>

<script>
export default {
  name: 'Idea',
  data() {
    return {
      title: 'Make CS better',
      description: 'Fix stuff',
      author: 'mess@purdue.edu',
      votes: 1,
      comments: [
        { body: 'good idea!', author: 'jh@purdue.edu' },
      ],
    };
  },
};
</script>
