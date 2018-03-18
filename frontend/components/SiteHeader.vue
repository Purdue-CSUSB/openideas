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
          figure.avatar.avatar-md.ml-2(data-initial="JH")
            img(:src="require('@/assets/lisa_happy.gif')")

        navbarLink(v-else to='signin') Sign In / Sign Up
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavbarLink from '@/components/NavbarLink';
import NavbarSiteName from '@/components/NavbarSiteName';
import NavbarItem from '@/components/NavbarItem';

export default {
  name: 'SiteHeader',
  components: {
    NavbarLink,
    NavbarSiteName,
    NavbarItem,
  },
  computed: {
    ...mapState('auth', ['accessToken', 'user']),
  },
  methods: {
    ...mapActions('auth', ['signOut']),
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
