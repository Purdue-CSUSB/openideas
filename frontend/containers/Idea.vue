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
      votes: 1,
      comments: [
        { body: 'good idea!' }
      ]
    };
  },
};
</script>
