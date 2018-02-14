<template lang="pug">

  #signin.container.grid-lg
    <div class="modal modal-lg">
      <a href="#close" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container">
        div.loading.loading-lg
      </div>
    </div>
    div.columns
      div.column.col-4.col-mx-auto.col-md-7.col-sm-10
        h3.text-center Welcome
        form
          div.form-group
            label.form-label(for="email") Email
            input.form-input(type="text", id="email", placeholder="pete@purdue.edu")

            <transition name="fade" mode="in-out">
            div.contain(v-if="showMsg")
              div.toast
                p.msg {{ nfmsg }} If you aren't new, double check your email address and try again.
              label.form-label(for="name" ) Name
              input.form-input(type="text", id="name", placeholder="Purdue Pete")

              div.toast.toast-success
                p.msg Great! Check your email for a login link.
            </transition>
          button.btn.btn-primary.btn-block(@click.prevent='toggle') Next
        p.text-center Need an account? #[button.btn.btn-link Sign Up]


</template>


<script>
export default {
  name: 'LoginCallbackHandler',
  props: {
    showMsg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      nfmsg: 'It looks like you\'re new to OpenIdeas!',
    };
  },
  methods: {
    toggle() {
      this.showMsg = !this.showMsg;
    },
  },
};
</script>

<style lang="scss" scoped>
form button:nth-last-of-type(1) {
  margin-top: 1.5rem;
}
p, .btn-link {
  font-size: small;
}

.toast {
  margin-top: 1.0rem;
  .msg {
    margin: 0;
    font-size: 0.7rem;
  }
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
