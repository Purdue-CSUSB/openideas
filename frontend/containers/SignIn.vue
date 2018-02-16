<template lang="pug">
  #signin.container.grid-lg
    .columns
      .column.col-4.col-mx-auto.col-md-7.col-sm-10
        Flash(:flashes='flashes' @removeFlash='index => removeFlash(index)')
        h3.text-center Welcome
        .form-group
          label.form-label(for="email") Email
          input.form-input(v-model="email" type="text", id="email", placeholder="pete@purdue.edu")

          transition(name="fade" mode="out-in")
            button.btn.btn-primary.btn-block(
              @click='checkEmail(email)'
              v-if='!signingUp'
            ) Next
            .contain(v-else)
              label.form-label(for="name") Name
              input.form-input(v-model="name" type="text", id="name", placeholder="Purdue Pete")
              button.btn.btn-primary.btn-block(@click='signUp({ email, name })') Sign Up

        p.text-center Need an account?
          button.btn.btn-link(@click="toggle()") Sign Up
</template>


<script>
import { mapActions } from 'vuex';
import flash from '@/mixins';

export default {
  mixins: [flash],
  data() {
    return {
      signingUp: false,
      email: '',
      name: '',
    };
  },
  methods: {
    ...mapActions('email-lookup', ['get']),
    ...mapActions('magic-links', ['create']),
    toggle() {
      this.signingUp = !this.signingUp;
    },
    checkEmail(email) {
      this.get(email)
        .then((user) => {
          this.flash(`Welcome back, ${user.name}!`, 'success');
          this.create({ email });
        })
        .catch(() => {
          this.flash('Hmm looks like we don\'t have your email...', 'warning');
          this.toggle();
        });
    },
  },
  mounted() {
    if (this.signingUp) this.toggle();
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
