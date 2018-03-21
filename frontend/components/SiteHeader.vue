<template lang="pug">
#site-header.container.grid-xl
  header
    nav.columns.text-center
      section.col-5.col-mr-auto.col-sm-12.col-md-12.col-lg-7.col-xl-6
        navbarSiteName 💡 OpenIdeas
        navbarLink(to='/').hide-sm Home
        navbarLink(to='/ideas') All Ideas
        navbarLink(to='/new' v-if='user && accessToken') New Idea
        navbarLink(to='/about' v-if='!(user && accessToken)') About
      section.col-3.col-md-12
        navbarItem(v-if='user && accessToken' @click.native='signOut')
          span.name {{ user.name }}
          figure.avatar.ml-2(:data-initial="user.name | initials")
            gravatar(:email="user.email", :size="64", default-img="404", @error="errorHandle", v-if="hasGravatar")

        navbarLink(v-else to='/signin') Sign In / Sign Up
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavbarLink from '@/components/NavbarLink';
import NavbarSiteName from '@/components/NavbarSiteName';
import NavbarItem from '@/components/NavbarItem';
import Gravatar from 'vue-gravatar';

export default {
  name: 'SiteHeader',
  components: {
    NavbarLink,
    NavbarSiteName,
    NavbarItem,
    Gravatar,
  },
  computed: {
    ...mapState('auth', ['accessToken', 'user']),
  },
  methods: {
    ...mapActions('auth', ['signOut']),
    errorHandle() {
      this.hasGravatar = false;
    },
  },
  filters: {
    initials(name) {
      const split = name.split(' ');
      return split[0][0] + split[1][0];
    },
  },
  data() {
    return {
      hasGravatar: true,
    };
  },
};
</script>

<style lang="scss" scoped>
#site-header {
  margin-bottom: 2rem;
}

figure {
  background-color: $primary-color;
}

span.name {
  font-size: 0.7rem;
}
</style>
