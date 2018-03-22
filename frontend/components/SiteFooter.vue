<template lang="pug">
footer.footer
  div.container.grid-lg
    div.columns
      div.column.col-8
        footer-links(:links='links')
      div.column.col-3.col-ml-auto.col-sm-12
        a(href="https://purdueusb.com", target="_blank")
          img(:src="require('@/assets/usb-wordmark-dark.png')").img-responsive.logo
        p.text-center Made by USB
</template>

<script>
import FooterLinks from '@/components/FooterLinks';

export default {
  name: 'SiteFooter',
  components: {
    FooterLinks,
  },
  data() {
    return {
      links: [
        {
          name: 'About',
          to: '/about',
        },
        {
          name: 'Terms',
          to: '/terms',
        },
        {
          name: 'Privacy',
          to: '/privacy',
        },
        {
          name: 'GitHub',
          to: 'https://github.com/Purdue-CSUSB/openideas',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #333333;
  color: white;
  padding-top: 0.5rem;
  margin-top: 3rem;
  padding-bottom: 0.5rem;
}

@media (max-width: 600px) {
  .column {
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

img {
  filter: grayscale(1);
  max-height: 2.4rem;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.2s ease;
  &:hover {
    filter: grayscale(0);
  }
}
</style>
