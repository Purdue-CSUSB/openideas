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
      div.column.col-2.col-xl-2.col-lg-2.col-md-3.col-sm-5.col-ml-auto
        a(href="https://purdueusb.com", target="_blank")
          img(:src="require('@/assets/usb-wordmark-dark.png')").img-responsive.logo
        p.text-center Made by USB
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
  padding-top: 0.5rem;
  margin-top: 3rem;
}

p {
  font-size: 0.5rem;
  font-weight: 300;
  line-height: 0.8rem;
  margin-bottom: 0.4rem;
}

a {
  color: white;
}

img {
  filter: grayscale(1);
  max-height: 2.4rem;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    filter: grayscale(0);
  }
}

.links {
  padding: 0;
}

.links li {
    display: inline-block;
    font-size: small;
    font-weight: 300;
}

.links li:not(:last-child) {
    padding-right: 1.3rem;
}

</style>
