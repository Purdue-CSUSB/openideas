<template lang="pug">
footer.footer.section-footer
  div.container.grid-xl
    div.columns
      div.column.col-3.col-sm-8
        ul
          li
            router-link(to='terms') Terms
          li
            router-link(to='privacy') Privacy
      div.column.col-2.col-sm-8.col-sm
        img(:src="require('@/assets/usb-wordmark-dark-mono.png')").img-responsive
        p Made with ❤️ by USB.
    p.text-center &copy; Copyright 2018 USB
</template>

<script>
// import logo from '@/assets/usb-wordmark-dark-mono.png';

export default {
  name: 'SiteFooter',
};
</script>

<style scoped>
.section-footer {
  background: #333333;
  color: white;
}

p {
  font-size: 0.6rem;
  font-weight: 300;
  line-height: 0.8rem;
}

a {
  color: white;
}

</style>
