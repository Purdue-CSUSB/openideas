<template lang="pug">
div.column.col-6
  div
    h2 Ideas
    idea-card(:idea={votes:10, title:"Test", description:"description", _id:1})
    idea-card(:idea={votes:10, title:"Test", description:"description", _id:1})
    idea-card(:idea={votes:10, title:"Test", description:"description", _id:1})
    idea-card(:idea={votes:10, title:"Test", description:"description", _id:1})
</template>

<script>
import IdeaCard from '@/components/IdeaCard';

export default {
  name: 'Ideas',
  components: {
    IdeaCard,
  },
};
</script>

<style lang="scss" scoped>

</style>
