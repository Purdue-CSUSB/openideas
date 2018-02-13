<template lang="pug">
<transition name="fade" mode="in-out">
  #signin.container.grid-lg
    <div class="modal modal-lg">
      <a href="#close" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container">
        div.loading.loading-lg
      </div>
    </div>
    div.columns
      div.column.col-4.col-mx-auto
        h3.text-center Welcome
        form
          div.form-group
            label.form-label(for="email") Email
            input.form-input(type="text", id="email", placeholder="pete@purdue.edu")
            p.msg(v-if="showMsg") {{ nfmsg }}

            label.form-label(for="name" v-if="showMsg") Name
            input.form-input(v-if="showMsg" type="text", id="name", placeholder="Purdue Pete")

          button.btn.btn-primary.btn-block Next
        p.text-center Need an account? #[button.btn.btn-link Sign Up]
</transition>

</template>


<script>
export default {
  name: 'LoginCallbackHandler',
  props: {
    showMsg: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      nfmsg: 'It looks like you\'re new to OpenIdeas! Tell us your name.',
    };
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

p.msg {
  margin-top: 1.0rem;
  font-size: 0.7rem;
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
