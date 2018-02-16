<template lang="pug">
footer.footer
  div.container.grid-lg
    div.columns
      div.column.col-8
        ul.links
          li
            router-link(to='terms') Terms
          li
            router-link(to='privacy') Privacy
          li
            a(href="https://github.com/Purdue-CSUSB/openideas") GitHub
      div.column.col-4.col-ml-auto.col-sm-12
        a(href="https://purdueusb.com", target="_blank")
          img(:src="require('@/assets/usb-wordmark-dark.png')").img-responsive.logo
        p.text-center Made by USB
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

@media (max-width: 600px) {
  .column{
      width: 100%;
      text-align: center;
  }
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

.links li {
    padding-right: 1.3rem;
}


a.active {
  text-decoration: none;
}

ul {
  margin-left: 0;
}


</style>
