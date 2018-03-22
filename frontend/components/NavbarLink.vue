<template lang="pug">
  <router-link class="btn btn-link" :to=to>
    <span>
      <slot/>
    </span>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  color: $dark-color;
}

.active span {
  padding-bottom: 0.4rem;
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

@media (max-width: 600px) {
  .active span {
    padding-bottom: 0.4rem;
    padding-top: 0.4rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    border-left-style: solid;
    border-left-color: $primary-color;
    border-left-width: 0.2rem;
    border-bottom-style: none;

    color: $dark-color;
    font-weight: 600;
    margin-left: 0rem;
  }
  span {
    margin-left: 0.6rem;
  }
}
</style>
