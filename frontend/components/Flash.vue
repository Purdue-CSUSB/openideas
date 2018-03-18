<template lang="pug">
.flashes(v-if='flashes.length > 0')
  template(v-for='(flash, index) in flashes')
    .flash(:class='["toast", toastClass(index)]')
      button.btn.btn-clear.float-right(@click='$emit("removeFlash", index)')
      p.msg {{ flash.message }}
</template>

<script>
export default {
  props: ['flashes'],
  methods: {
    toastClass(index) {
      return `toast-${this.flashes[index].type}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  margin-top: 1rem;
  margin-bottom: 1rem;
  .msg {
    margin: 0;
    font-size: 0.7rem;
  }
}
button {
  padding-top: 0.2rem;
}
</style>
