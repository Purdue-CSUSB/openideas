<template lang="pug">
header.container.grid-xl
  nav.columns
    section.column.col-9.menu-left
      navbarSiteName 💡 OpenIdeas
      navbarLink(to='/').hide-sm Home
      navbarLink(to='/ideas') All Ideas
      navbarLink(to='/new' v-if='user && accessToken') New Idea
      navbarLink(to='/about' v-if='!(user && accessToken)') About
    section.column.col-3.text-right
      UserDropdown(v-if='user && accessToken', :user="user")
      navbarLink(v-else to='/signin').text-center Sign In / Sign Up
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavbarLink from '@/components/NavbarLink';
import NavbarSiteName from '@/components/NavbarSiteName';
import NavbarItem from '@/components/NavbarItem';
import UserDropdown from '@/components/UserDropdown';

export default {
  name: 'SiteHeader',
  components: {
    NavbarLink,
    NavbarSiteName,
    NavbarItem,
    UserDropdown,
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
header {
  margin-bottom: 2rem;
}

span.name {
  font-size: 0.7rem;
}

.user-container {
  display: flex;
  flex-direction: row-reverse;
}

@media (max-width: 600px) {
  nav {
    display: flex;
    flex-direction: row;
  }
  .menu-left {
    display: flex;
    flex-direction: column;
    .btn {
      text-align: left;
    }
  }
  .user-container {
    flex-direction: column;
  }
}
</style>
