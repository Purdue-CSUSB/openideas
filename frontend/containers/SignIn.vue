
<template lang="pug">
  #signin.container.grid-lg
    .columns
      .column.col-4.col-mx-auto.col-md-7.col-sm-10
        Flash(:flashes='flashes' @removeFlash='index => removeFlash(index)')
        h3 Welcome to OpenIdeas!
        p.large Enter your email to get started.
        TextField(
          label='Email'
          v-model='email'
          placeholder='pete@purdue.edu'
          @keyup.enter.native='isShowing ? createAccount({ email, name }) : checkEmail(email)'
        )

        transition(name="fade" mode="out-in")
          CustomButton.btn-block(type='primary' @click='checkEmail(email)' v-if='!isShowing', :loading="isGetPending", :disabled="found") Next
          .contain(v-else)
            TextField(
              label='Name'
              v-model='name'
              placeholder='Purdue Pete'
              @keyup.enter.native='createAccount({ email, name })'
            )
            CustomButton.btn-block(type='primary' @click='createAccount({ email, name })', :loading="isCreatePending", :disabled="created") Sign Up

        p.text-center {{ isShowing ? 'Have' : 'Need' }} an account?
          button.btn.btn-link(@click="toggleShow()") Sign {{ isShowing ? 'In' : 'Up' }}
</template>


<script>
import { mapActions, mapState } from 'vuex';
import TextField from '@/components/TextField';
import CustomButton from '@/components/CustomButton';
import { flash, toggle, loadingIndicator } from '@/mixins';

export default {
  mixins: [flash, toggle, loadingIndicator],
  components: { TextField, CustomButton },
  data() {
    return {
      email: '',
      name: '',
    };
  },
  computed: {
    ...mapState('email-lookup', ['isGetPending']),
    ...mapState('users', ['isCreatePending']),
  },
  methods: {
    ...mapActions('email-lookup', { lookupEmail: 'get' }),
    ...mapActions('magic-links', { sendLink: 'create' }),
    ...mapActions('auth', ['signUp']),
    checkEmail(email) {
      this.lookupEmail(email)
        .then(user => {
          this.flash(
            `Welcome back, ${
              user.name
            }! Check your inbox for a magic login link.`
          );
          this.sendLink({ email: user.email, name: user.name });
          this.found = true;
        })
        .catch(() => {
          this.flash(
            "Looks like you're new around here (we didn't find an account with that email). Enter your name to sign up.",
            'warning'
          );
          this.toggleShow();
        });
    },
    createAccount(credentials) {
      this.signUp(credentials)
        .then(user => {
          this.flash(
            `Welcome to OpenIdeas, ${
              user.name
            }! We're sending a magic login link to ${user.email}.`
          );
          this.sendLink({ email: user.email, name: user.name });
          this.created = true;
        })
        .catch(() =>
          this.flash(
            'Oops, looks like we had some trouble creating your account.',
            'error'
          )
        );
    },
  },
  mounted() {
    this.signingUp = false;
    this.found = false;
    this.created = false;
  },
  beforeRouteEnter(to, from, next) {
    if (from.path === '/magic') {
      next(vm =>
        vm.flash(
          "Looks like that link didn't work... Try sending another.",
          'error'
        )
      );
    } else {
      next();
    }
  },
};
</script>

<style lang="scss" scoped>
p,
.btn-link {
  font-size: small;
}

p.large {
  font-size: 0.8rem;
}
.btn-link {
  padding-top: 0.23rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
