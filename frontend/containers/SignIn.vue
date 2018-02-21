<template lang="pug">
  #signin.container.grid-lg
    .columns
      .column.col-4.col-mx-auto.col-md-7.col-sm-10
        Flash(:flashes='flashes' @removeFlash='index => removeFlash(index)')
        h3.text-center Welcome
        TextField(
          label='Email'
          v-model='email'
          placeholder='pete@purdue.edu'
          @keyup.enter.native='signingUp ? createAccount({ email, name }) : checkEmail(email)'
        )

        transition(name="fade" mode="out-in")
          button.btn.btn-primary.btn-block(
            @click='checkEmail(email)'
            v-if='!signingUp'
          ) Next
          .contain(v-else)
            TextField(
              label='Name'
              v-model='name'
              placeholder='Purdue Pete'
              @keyup.enter.native='createAccount({ email, name })'
            )
            button.btn.btn-primary.btn-block(@click='createAccount({ email, name })') Sign Up

        p.text-center Need an account?
          button.btn.btn-link(@click="toggle()") Sign Up
</template>


<script>
import { mapActions } from 'vuex';
import TextField from '@/components/TextField';
import flash from '@/mixins';

export default {
  mixins: [flash],
  components: { TextField },
  data() {
    return {
      signingUp: false,
      email: '',
      name: '',
    };
  },
  methods: {
    ...mapActions('email-lookup', { lookupEmail: 'get' }),
    ...mapActions('magic-links', { sendLink: 'create' }),
    ...mapActions('auth', ['signUp']),
    toggle() {
      this.signingUp = !this.signingUp;
    },
    checkEmail(email) {
      this.lookupEmail(email)
        .then((user) => {
          this.flash(`Welcome back, ${user.name}! Check your inbox for a magic link.`);
          this.sendLink({ email });
        })
        .catch(() => {
          this.flash('Hmm looks like we don\'t have your email...', 'warning');
          this.toggle();
        });
    },
    createAccount(credentials) {
      this.signUp(credentials)
        .then((user) => {
          this.flash(`Welcome to OpenIdeas, ${user.name} We're sending a magic link to ${user.email}.`);
          this.sendLink({ email: user.email });
        })
        .catch(() => this.flash('Oops, looks like we had some trouble creating your account.', 'error'));
    },
  },
  mounted() {
    this.signingUp = false;
  },
  beforeRouteEnter(to, from, next) {
    if (from.path === '/magic') {
      next(vm => vm.flash('Looks like that link didn\'t work... Try sending another.', 'error'));
    }
    next();
  },
};
</script>

<style lang="scss" scoped>
.btn-primary {
  margin-top: 1.5rem;
}
p, .btn-link {
  font-size: small;
}

button {
  padding-top: 0.2rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
