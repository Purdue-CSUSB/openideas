<template lang="pug">
.form-group
  label.form-label(v-if='label') {{ label }}
  input.form-input(
    :type='type'
    :placeholder='placeholder'
    :value='value'
    @input='event => $emit("input", event.target.value)'
  )
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
    type: { default: 'text' },
    value: String,
  },
};
</script>
