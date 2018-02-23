<template lang="pug">
.form-group
  label.form-label(v-if='label') {{ label }}
  textarea.form-input(
    :placeholder='placeholder'
    @input='event => $emit("input", event.target.value)'
  )
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
  },
};
</script>
