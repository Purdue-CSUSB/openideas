<template lang="pug">
#home
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      ideas: [
        { title: 'Make CS better', description: 'Fix stuff', votes: 1 },
        { title: 'Make CS worse', description: 'Break stuff', votes: 0 },
      ],
    };
  },
};
</script>
