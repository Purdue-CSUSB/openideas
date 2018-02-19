<template lang="pug">
#magic.container.grid-lg
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('auth', ['signIn']),
  },
  mounted() {
    this.signIn(this.$route.query.token)
      .then(() => this.$router.push('/'))
      .catch(() => this.$router.push('/signin'));
  },
};
</script>
