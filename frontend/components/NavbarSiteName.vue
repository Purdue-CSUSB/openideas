<template lang="pug">
router-link.btn.btn-link(to="/", exact-active-class="notactive")
      span <slot/>
      <span class="badge" data-badge="Beta">
      </span>
</template>

<script>
// this component has no script
</script>

<style lang="scss" scoped>
a.btn.btn-link {
  color: $dark-color !important;
  font-size: 0.9rem;
  &:hover {
    text-decoration: none;
    color: $primary-color !important;
  }
}

.badge {
  font-size: 0.5rem;
}
span {
  white-space: nowrap;
}
</style>
