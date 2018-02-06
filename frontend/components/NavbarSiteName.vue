<template lang="pug">
router-link.navbar-brand.mr-2(to="/")
      span <slot/>
</template>

<script>
	// this component has no script
</script>

<style lang="scss">
a {
  color: $dark-color
}
</style>
