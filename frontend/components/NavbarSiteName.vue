<template lang="pug">
router-link.navbar-brand.mr-2(to="/", exact-active-class="notactive")
      span <slot/>
</template>

<script>
// this component has no script
</script>

<style lang="scss">
a {
  color: $dark-color
}
span {
  white-space: nowrap;
}
</style>
