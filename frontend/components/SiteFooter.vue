<template lang="pug">
footer.footer
  div.container.grid-xl
    div.columns
      div.column.col-3.col-xl-3.col-lg-4.col-md-12.col-sm-12.col-mr-auto
        ul.links.text-center.centered
          li
            router-link(to='terms') Terms
          li
            router-link(to='privacy') Privacy
          li
            a(href="https://github.com/Purdue-CSUSB/openideas") GitHub
      div.column.col-2.col-xl-3.col-lg-3.col-md-4.col-sm-6.col-ml-auto
        a(href="https://purdueusb.com", target="_blank")
          img(:src="require('@/assets/usb-wordmark-dark.png')").img-responsive.logo
        p.text-center Made with <i class="fa fa-heart"></i> and <i class="fa fa-coffee"></i> by USB
      div.column.col-md-4.show-md.show-sm.col-sm-3
</template>

<script>
// import logo from '@/assets/usb-wordmark-dark-mono.png';

export default {
  name: 'SiteFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  background: #333333;
  color: white;
  padding-top: 0.8rem;
}

p {
  font-size: 0.6rem;
  font-weight: 300;
  line-height: 0.8rem;
}

a {
  color: white;
}

img {
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
}

.links {
  padding: 0;
  margin-top: 1.5rem;
}

.links li {
    display: inline-block;
    font-size: smaller;
    font-weight: 300;
}

.links li:not(:last-child) {
    padding-right: 1.3rem;
}

.logo {
  margin-bottom: 0.5rem;
}


</style>
