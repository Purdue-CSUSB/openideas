<template lang="pug">
.beta-wrapper
  .modal#modal-id(:class='{ active: isShowing }')
    a.modal-overlay(@click="this.toggleShow", aria-label="Close", role="button", tabindex="0")
    .modal-container
      .modal-header
        button.btn.btn-clear.float-right(@click="this.toggleShow", aria-label="Close")
        h5.modal-title 💡 Welcome to our Beta!
      .modal-body
        .content
          p OpenIdeas is currently in beta, so there might be some rough edges!
          dl
            dt Found a bug?
            dd Open an issue on our #[a(href="https://github.com/Purdue-CSUSB/openideas/issues") GitHub repo].

            dt Have a question?
            dd Send USB an #[a(href="mailto:usb@cs.purdue.edu") email] or talk to us on #[a(href="https://m.me/purdueusb") Messenger].

            dt Want to contribute?
            dd Contributions are welcome and encouraged! #[a(href="https://github.com/Purdue-CSUSB/openideas/blob/master/CONTRIBUTING.md") Get started].
          p
      .modal-footer
        button.btn.btn-primary(@click="this.toggleShow") OK
  #home.container.grid-lg
    hero(title="Your Voice Matters", subtitle="We know that Purdue CS students have many great ideas for their community! That's why we created OpenIdeas, the best place to share and discuss those ideas. Let's get the conversations started!")
      button-link(to='/signin' type='primary') Get Started
</template>

<script>
import Hero from '@/components/Hero';
import ButtonLink from '@/components/ButtonLink';
import { setCookie, getCookie } from 'tiny-cookie';
import { toggle } from '@/mixins';

export default {
  name: 'Home',
  components: {
    Hero,
    ButtonLink,
  },
  mixins: [toggle],
  mounted() {
    const cookie = getCookie('lastVisit');
    if (cookie === null || cookie < 1521384435934) {
      this.isShowing = true;
      setCookie('lastVisit', Date.now());
    }
    // this.$Progress.set(100);
  },
};
</script>

<style lang="scss" scoped>
#home a.btn {
  background-color: $new-primary-color !important;
  border-color: $new-border-color !important;
  margin-top: 1rem;
}
</style>
