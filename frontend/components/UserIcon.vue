<template lang='pug'>
figure.avatar(:data-initial="user.name | initials")
  gravatar(:email="user.email", :size="64", default-img="404", @error="unsetGravatar", v-if="hasGravatar")
</template>

<script>
import Gravatar from 'vue-gravatar';
import { initials } from '@/mixins';

export default {
  mixins: [initials],
  name: 'UserIcon',
  props: { user: Object },
  data() {
    return { hasGravatar: true };
  },
  methods: {
    unsetGravatar() {
      this.hasGravatar = false;
    },
  },
  components: { Gravatar },
};
</script>

<style lang='sass'>

</style>
