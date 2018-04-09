<template lang="pug">
.form-group
  label.form-label(v-if='label') {{ label }}
  textarea.form-input(
    :placeholder='placeholder'
    @input='event => $emit("input", event.target.value)'
    v-autoresize="true"
  )
</template>

<script>
import { autoresize } from '@/mixins';

export default {
  mixins: [autoresize],
  props: {
    label: String,
    placeholder: String,
  },
};
</script>


<style lang="sass" scoped>
textarea
  resize: none
</style>
