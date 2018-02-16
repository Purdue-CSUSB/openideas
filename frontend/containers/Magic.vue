<template lang="pug">
#magic.container.grid-lg
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/user/types';

const { mapActions } = createNamespacedHelpers('user');

export default {
  methods: {
    ...mapActions([types.action.AUTH]),
  },
  mounted() {
    this.auth(this.$route.query.token);
  },
};
</script>
