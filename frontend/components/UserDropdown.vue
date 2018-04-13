<template lang="pug">
.dropdown.dropdown-right
  a(href="#", tabindex="0").btn.btn-link.dropdown-toggle
    span {{ user.name }}
    user-icon(:user='user')
  ul.menu
    li.menu-item
      router-link(to="/profile") Profile
    li.menu-item
      button.btn.btn-link(@click='signOut') Log Out
</template>

<script>
import { mapActions } from 'vuex';
import UserIcon from '@/components/UserIcon';

export default {
  name: 'UserDropdown',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('auth', ['signOut']),
  },
  components: { UserIcon },
};
</script>

<style lang="sass" scoped>
.avatar
  margin-left: 0.5rem

.menu
  text-align: left

.dropdown
  margin-left: auto
  display: flex
  flex-direction: row-reverse
  .menu
    margin-top: -0.5rem

figure
  background-color: $primary-color

.menu-item
  font-size: 0.7rem;
  &:hover
    background-color: #eeeeee
    color: $dark-color;
  >a:hover
    color: $dark-color;
    background-color: #eeeeee
  &.menu-header
    font-weight: 500;
    font-variant: small-caps
  button.btn.btn-link
    color: $dark-color;
    font-size: 0.7rem;
    padding-left: 0;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    height: unset;
    border: 0;

.dropdown > a > span
  color: $dark-color
  font-size: 0.7rem

.dropdown
  margin-top: -0.2rem

@media(max-width: 600px)
  .column
    width: 100%;
    text-align: center;


</style>
