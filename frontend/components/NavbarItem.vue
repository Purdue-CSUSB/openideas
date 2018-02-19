<template lang="pug">
a.btn.btn-link
  span
    slot
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
* {
  color: $dark-color;
}

.active span {
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  border-bottom-style: solid;
  border-bottom-color: $primary-color;
  border-bottom-width: 0.2rem;

  color: $dark-color;
  font-weight: 600;
}
.btn:focus {
    box-shadow: none;
}
</style>
